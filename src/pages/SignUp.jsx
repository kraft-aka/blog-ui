import React, { useState, useEffect } from "react";
import { signUpUser } from "../API/users";
import { useNavigate } from "react-router-dom";
import "./SignUp.scss";
import toast from "react-hot-toast";
import LoadingSpinner from "../components/UI/LoadingSpinner";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const errorMsg = "Email must be valid email!";

  function checkEmail(em) {
    return em.indexOf("@" !== -1) && em.trim().length > 0;
  }

  async function handleSignUpForm(e) {
    e.preventDefault();
    if (
      !checkEmail(email) &&
      !username.trim().length > 0 &&
      !password.trim().length > 0
    ) {
      setEmailErr(true);
      toast.error("All fileds must be filled!");
      return;
    }

    try {
      setIsLoading(true);
      const user = {
        email: email,
        userName: username,
        password: password,
      };
      await signUpUser(user);
      if (user) {
        navigate("/signin");
        toast.success("Successfully signed up.");
        setIsLoading(false);
        setEmail("");
        setUsername("");
        setPassword("");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Error occured.", error);
      setIsLoading(false);
    }
  }

  return (
    <>
      {!isLoading ? (
        <div className="signup-container">
          <h2 className="signup-title">Sign/Up</h2>
          <form className="signup-form" onSubmit={handleSignUpForm}>
            <label htmlFor="signup-email" className="signup-label">
              Email
            </label>
            <input
              value={email}
              type="email"
              id="signup-email"
              className="signup-input"
              placeholder="userName@mail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="signup-username" className="signup-label">
              Username
            </label>
            <input
              type="text"
              value={username}
              id="signup-username"
              className="signup-input"
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="signup-user-password" className="signup-label">
              Password
            </label>
            <input
              value={password}
              type="password"
              id="signup-user-password"
              className="signup-input"
              placeholder="enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="signup-cta">
              <button type="submit" className="signup-btn">
                Sign up
              </button>
            </div>
          </form>
        </div>
      ) : (
        <LoadingSpinner />
      )}
    </>
  );
}
