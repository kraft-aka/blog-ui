import React from "react";
import "./UserCard.scss";

export default function UserCard() {
  let imgSrc =
    "https://images.unsplash.com/photo-1705848533403-6a5427e6f466?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8";
  return (
    <main className="user-card-container">
      <h3>Your Profile</h3>
      <img src={imgSrc} alt="user's photo" />
      <section className="user-card-items">
        <p className="user-card-username">Username: <span>John Doe</span></p>
        <p className="user-card-email">Email: <span>johndoe@gmail.com</span></p>
      </section>
    </main>
  );
}
