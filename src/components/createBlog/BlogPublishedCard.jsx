import React from "react";
import formatDate from "../../utils/formatDate";
import './BlogPublishedCard.scss'

export default function BlogPublishedCard({ blogs }) {
  const { _id, title, createdAt } = blogs;
  return (
    <section key={_id}  className="blog-user-container">
      <h3>{title} / <span>{formatDate(createdAt)}</span> </h3>
      <div className="blog-user-cta">
        <button className="blog-user-btn">Edit</button>
        <button className="blog-user-btn delete">Delete</button>
      </div>
    </section>
  );
}
