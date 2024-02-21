import React, { useState } from "react";
import formatDate from "../../utils/formatDate";
import "./BlogPublishedCard.scss";
import EditBlog from "./EditBlog";
import { Link } from "react-router-dom";

export default function BlogPublishedCard({ handleDeleteBlog, blogs }) {
  const { _id, title, createdAt } = blogs;
  const [showEdit, setshowEdit] = useState(false);

  function handleEdit() {
    setshowEdit(true);
  }

  function handleEditClose() {
    setshowEdit(false);
  }
  return (
    <>
      <section key={_id} className="blog-user-container">
        <Link to={`/blog/${_id}`}>
          <h3>
            {title} / <span>{formatDate(createdAt)}</span>{" "}
          </h3>
        </Link>
        <div className="blog-user-cta">
          <button className="blog-user-btn" onClick={handleEdit}>
            Edit
          </button>
          <button
            className="blog-user-btn delete"
            onClick={() => handleDeleteBlog(_id)}
          >
            Delete
          </button>
        </div>
      </section>
      {showEdit && <EditBlog handleEditClose={handleEditClose} blogs={blogs} />}
    </>
  );
}
