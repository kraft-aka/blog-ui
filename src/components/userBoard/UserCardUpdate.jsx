import React from "react";
import "./UserCardUpdate.scss";

export default function UserCardUpdate() {
  return (
    <main className="user-card-update-container">
      <form className="user-card-update-form">
        <label htmlFor="username">Username</label>
        <input type="text" />
        <label htmlFor="email">Email</label>
        <input type="email" />
        <label htmlFor="password">Password</label>
        <input type="password" />
        <button className="user-card-update-btn" type="submit">Save</button>
      </form>
    </main>
  );
}
