import React, { useState } from "react";
import "./UserCard.scss";
import userIcon from "../../assets/user-icon.jpg";
import { useAuth } from "../../providers/authProvider";
import { basePath } from "../../API/axiosInstance";
import { addUserIcon } from "../../API/users";
import UserPassword from "./UserPassword";

export default function UserCard() {
  const { loggedUser, SetLoggedUser } = useAuth();
  const { userName, email } = loggedUser;
  const [avatar, setAvatar] = useState("");

  // user icon by default
  let imgSrc = userIcon;

  const handleAvatarChange = (e) => {
    setAvatar(e.target.files[0]);
  };

  // submit handler
  function handleSubmitUserChange(e) {
    e.preventDefault();
  }

  // get path to the user icon
  if (loggedUser && loggedUser.userIcon) {
    imgSrc = basePath + loggedUser.userIcon.slice(1);
  }

  const submitUserIcon = async (e) => {
    e.preventDefault();
    if (loggedUser) {
      const formData = new FormData();
      formData.append("uploadFile", avatar);
      const { userIcon } = await addUserIcon(formData);
      let url = basePath + userIcon.slice(1);
      // read it again
      await fetch(url, { cache: "reload", mode: "no-cors" });
      document.body
        .querySelectorAll(`img[src='${url}']`)
        .forEach((img) => (img.src = url));
        //
      SetLoggedUser({
        ...loggedUser,
        userIcon: userIcon,
      });
    } else {
      console.log("Error occured");
    }
  };

  return (
    <main className="user-card-container">
      <h3>Your Profile</h3>
      <img src={imgSrc} alt="user's photo" />
      <form className="user-card-icon-form" onSubmit={submitUserIcon}>
        <label htmlFor="avatar">User icon</label>
        <input
          type="file"
          id="avatar"
          className="user-icon-load"
          name="avatar"
          onChange={handleAvatarChange}
        />
        <br />
        <input type="submit" className="user-card-update-btn" />
      </form>
      <section className="user-card-items">
        <p className="user-card-username">
          Username: <span>{userName}</span>
        </p>
        <p className="user-card-email">
          Email: <span>{email}</span>
        </p>
      </section>
      <UserPassword />
    </main>
  );
}
