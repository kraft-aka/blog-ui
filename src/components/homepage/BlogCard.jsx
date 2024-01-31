import React from "react";
import "./BlogCard.scss";
import { Link } from "react-router-dom";
import { basePath } from "../../API/axiosInstance";
import formatDate from "../../utils/formatDate";

export default function BlogCard({ blog }) {
  const {
    title,
    _id,
    userName,
    createdAt,
    blogContent,
    blogImage,
    createdBy: { userIcon },
  } = blog;

  let imgSrc =
    "https://images.unsplash.com/photo-1705848533403-6a5427e6f466?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8";
  let iconSrc =
    "https://images.unsplash.com/photo-1705848533403-6a5427e6f466?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8";

  if (blogImage) {
    imgSrc = `${basePath}${blogImage.slice(1)}`;
  }

  if (userIcon) {
    iconSrc = `${basePath}${userIcon.slice(1)}`;
  }

  // cretes description
  const getDescription = (input) => input.slice(0, 15) + "...";

  return (
    <div className="blog-card">
      <img src={imgSrc} alt="image for blog" className="blog-card-img" />
      <div className="blog-card-container">
        <Link to={`/blog/${_id}`}>
          <header className="blog-card-header">
            <img
              src={iconSrc}
              alt="user icon"
              className="blog-card-user-icon"
            />
            <p className="blog-card-username">{userName}</p>
            <p className="blog-card-date">{formatDate(createdAt)}</p>
          </header>
          <h1 className="blog-card-title">{title}</h1>
          <p className="blog-card-description">{getDescription(blogContent)}</p>
        </Link>
      </div>
    </div>
  );
}
