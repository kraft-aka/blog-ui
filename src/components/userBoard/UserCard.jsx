import React, { useState } from "react";
import "./UserCard.scss";
import { useAuth } from "../../providers/authProvider";
import { inputValueIsValid } from "../../utils/inputValueIsValid";
import { inputEmailIsValid } from "../../utils/inputValueIsValid";

export default function UserCard() {
  const { loggedUser } = useAuth();
  const { userName, email } = loggedUser;
  const [newUserName, setNewUserName] = useState(userName);
  const [newEmail, setNewEmail] = useState(email);
  const [newPassword, setNewPassword] = useState("");

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

  let imgSrc =
    "https://images.unsplash.com/photo-1705848533403-6a5427e6f466?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8";

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
        <label htmlFor="username">Username</label>
        <input
          type="text"
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
        />
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
