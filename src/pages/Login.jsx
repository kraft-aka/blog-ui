import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../providers/authProvider";
import { useNavigate } from "react-router-dom";
import "./Login.scss";
import { toast } from "react-hot-toast";
import LoadingSpinner from "../components/UI/LoadingSpinner";

export default function Login() {
  const { SetToken, SetLoggedUser } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();



  const validateInput = () => {
    let isRequired = true;
    if (!email) {
      setEmailErr("Email is requred!");
      isRequired = false;
    } else if (email.indexOf("@") == -1) {
      setEmailErr("Email must be valid!");
      isRequired = false;
    }

    if (!password) {
      setPasswordErr("Password is required!");
      isRequired = false;
    }
    return isRequired;
  };

  // submit form. logs in the user
  const handleSubmitForm = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const isTrue = validateInput();
    if (isTrue) {
      axios
        .post("http://localhost:7000/signin", {
          email: email,
          password: password,
        })
        .then((response) => {
          SetLoggedUser(response.data.user);
          SetToken(response.data.token);
          setIsLoading(false);
          setEmail("");
          setPassword("");
          toast.success('Successfully logged in!');
          navigate('/user')
        })
        .catch((error) => toast.error("No such user."));
      setIsLoading(true);
    }
    setIsLoading(false);
  };

  return (
    <>
      {!isLoading ? (
        <div className="login-container">
          <h2 className="login-title">Log/In</h2>
          <form className="login-form" onSubmit={handleSubmitForm}>
            <label htmlFor="login-email" className="login-label">
              Email
            </label>
            {!email && <p className="login-error-msg">{emailErr}</p>}
            <input
              type="email"
              id="login-email"
              className="login-input"
              placeholder="userName@mail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="login-user-password" className="login-label">
              Password
            </label>
            {!password && <p className="login-error-msg">{passwordErr}</p>}
            <input
              type="password"
              id="login-user-password"
              className="login-input"
              placeholder="enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="login-cta">
              <button type="submit" className="login-btn">
                Login
              </button>
              <p>or</p>
              <Link to="/signup" className="login-btn">
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      ) : (
        <LoadingSpinner isLoading={isLoading.toString()} />
      )}
    </>
  );
}
