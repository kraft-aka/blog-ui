import React from "react";
import like from "../../assets/like.svg";
import comment from "../../assets/comment.svg";
import "./CommentCard.scss";

export default function CommentCard({
  userName,
  commentText,
  createdAt,
  likes,
}) {
  console.log(userName, commentText)
  let imgSrc =
    "https://images.unsplash.com/photo-1705848533403-6a5427e6f466?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8";

  return (
    <section className="comment-card-container">
      <header className="comment-card-header">
        <img src={imgSrc} alt="user icon" className="comment-card-user-icon" />
        <div className="comment-card-username-date-cont">
          <p className="comment-card-username"> User Name</p>
          <p className="comment-card-date">{createdAt}</p>
        </div>
      </header>
      <div className="comment-card-content-container">
        <p className="comment-card-text">
          {commentText}
        </p>
      </div>
      <div className="comment-card-cta">
        <div className="comment-card-cta-item-1">
          <p className="comment-card-like">{likes}</p>
          <img src={like} alt="thumb up" />
        </div>
        <img src={comment} alt="comment cloud" />
      </div>
    </section>
  );
}
