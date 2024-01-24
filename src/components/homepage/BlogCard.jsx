import React from "react";
import "./BlogCard.scss";
import { Link } from "react-router-dom";

export default function BlogCard({ blog }) {
  const { title, _id, userName, createdAt, blogContent } = blog;

  // reformats the date to conventional one
  const formatDate = (date) => {
    const inputDate = new Date(date);
    return `${
      inputDate.getMonth() + 1
    }/${inputDate.getDate()}/${inputDate.getFullYear()}`;
  };

  // cretes description
  const getDescription = (input) => input.slice(0, 15) + "...";

  return (
    <div className="blog-card">
      <img src="https://images.unsplash.com/photo-1682685797741-f0213d24418c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D" alt="image for blog" className="blog-card-img" />
      <div className="blog-card-container">
        <Link to={`/blog/${_id}`}>
          <header className="blog-card-header">
            <img src="https://images.unsplash.com/photo-1705848533403-6a5427e6f466?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8" alt="user icon" className="blog-card-user-icon" />
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
