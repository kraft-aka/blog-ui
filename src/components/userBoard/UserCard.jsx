import React, { useState } from "react";
import "./UserCard.scss";
import userIcon from "../../assets/user-icon.jpg";
import { useAuth } from "../../providers/authProvider";
import { inputValueIsValid } from "../../utils/inputValueIsValid";
import { inputEmailIsValid } from "../../utils/inputValueIsValid";
import { basePath } from "../../API/axiosInstance";
import { addUserIcon } from "../../API/users";

export default function UserCard() {
  const { loggedUser, SetLoggedUser } = useAuth();
  const { userName, email } = loggedUser;
  const [avatar, setAvatar] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleAvatarChange = (e) => {
    setAvatar(e.target.files[0]);
    console.log(e.target.files[0]);
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

  const submitUserIcon = async (e) => {
    e.preventDefault();
    if (loggedUser.id) {
      const formData = new FormData();
      formData.append("uploadFile", avatar);
      await addUserIcon(formData);
      console.log("User avatar is uploaded");
      SetLoggedUser((loggedUser) => ({
        ...loggedUser,
        userIcon: avatar,
      }));
      setAvatar(avatar);
    } else {
      console.log("Error occured");
    }
  };
  console.log(loggedUser);

  return (
    <main className="user-card-container">
      <h3>Your Profile</h3>
      <img src={avatar ? avatar : imgSrc} alt="user's photo" />
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
