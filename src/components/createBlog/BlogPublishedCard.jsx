import React from "react";
import formatDate from "../../utils/formatDate";
import './BlogPublishedCard.scss'

export default function BlogPublishedCard({ blogs, handleDeleteBlog, handleEdit, editOn }) {
  const { _id, title, createdAt } = blogs;
  return (
    <>
    <section key={_id} className="blog-user-container">
      <h3>{title} / <span>{formatDate(createdAt)}</span> </h3>
      <div className="blog-user-cta">
        <button className="blog-user-btn" onClick={handleEdit}>Edit</button>
        <button className="blog-user-btn delete" onClick={() => handleDeleteBlog(_id)}>Delete</button>
      </div>
    </section>
    </>
  );
}
