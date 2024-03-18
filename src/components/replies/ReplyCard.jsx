import React from 'react';
import './ReplyCard.scss';
import userIcon from "../../assets/user-icon.jpg";
import { useAuth } from '../../providers/authProvider';
//import formatDate from '../../utils/formatDate';

export default function ReplyCard() {
  const { loggedUser } = useAuth();

  let imgSrc = userIcon;

  // if (comment && comment.userId && comment.userId.userIcon) {
  //   imgSrc = basePath + comment.userId.userIcon.slice(1);
  // }

  return (
    <section className="reply-card-container">
      <header className="reply-card-header">
        <img src={imgSrc} alt="user icon" className="reply-card-user-icon" />
        <div className="reply-card-username-date-cont">
          <p className="reply-card-username">{loggedUser.userName}</p>
          <p className="reply-card-date">{new Date().getFullYear}</p>
        </div>
      </header>
      <div className="reply-card-content-container">
        <p className="reply-card-text">{ }some reply</p>
      </div>
    </section>
  )
}
