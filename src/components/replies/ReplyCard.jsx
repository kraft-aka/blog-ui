import React from 'react';
import './ReplyCard.scss';
import userIcon from "../../assets/user-icon.jpg";
import { useAuth } from '../../providers/authProvider';
//import formatDate from '../../utils/formatDate';

export default function ReplyCard({reply}) {
  const { loggedUser } = useAuth();

  let imgSrc = userIcon;

  return (
    <section className="reply-card-container">
      <header className="reply-card-header">
        <img src={imgSrc} alt="user icon" className="reply-card-user-icon" />
        <div className="reply-card-username-date-cont">
          <p className="reply-card-username">{loggedUser.userName}</p>
        </div>
      </header>
      <div className="reply-card-content-container">
        <p className="reply-card-text">{reply.commentText }</p>
      </div>
    </section>
  )
}
