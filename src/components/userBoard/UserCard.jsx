import React, { useState } from "react";
import "./UserCard.scss";
import userIcon from "../../assets/user-icon.jpg";
import { useAuth } from "../../providers/authProvider";
import { inputValueIsValid } from "../../utils/inputValueIsValid";
import { inputEmailIsValid } from "../../utils/inputValueIsValid";
import { basePath } from "../../API/axiosInstance";

export default function UserCard() {
  const { loggedUser } = useAuth();
  const { userName, email } = loggedUser;
  const [newUserName, setNewUserName] = useState(userName);
  const [newEmail, setNewEmail] = useState(email);
  const [newPassword, setNewPassword] = useState("");
  console.log(loggedUser);

  const validUserName = inputValueIsValid(newUserName);
  const validEmail = inputEmailIsValid(newEmail);
  const validPassword = inputValueIsValid(newPassword);

  // updated user fields to submit
  const updatedUser = {
    userName: validUserName,
    email: validEmail,
    password: validPassword,
  };

  // submit handler
  function handleSubmitUserChange(e) {
    e.preventDefault();
  }

  // user icon bydefault
  let imgSrc = userIcon;

  // get path to the user icon
  if (loggedUser && loggedUser.userIcon) {
    imgSrc = basePath + loggedUser.userIcon.slice(1);
  }

  return (
    <main className="user-card-container">
      <h3>Your Profile</h3>
      <img src={imgSrc} alt="user's photo" />
      <section className="user-card-items">
        <p className="user-card-username">
          Username: <span>{userName}</span>
        </p>
        <p className="user-card-email">
          Email: <span>{email}</span>
        </p>
      </section>
      <form className="user-card-update-form" onSubmit={handleSubmitUserChange}>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="********"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <button className="user-card-update-btn" type="submit">
          Save
        </button>
      </form>
    </main>
  );
}
