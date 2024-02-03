import React from "react";
import "./CreateBlog.scss";

export default function CreateBlog() {
  return (
    <main className="create-blog-container">
      <header className="create-blog-header">
        <h3> Create Blog</h3>
      </header>
      <form className="create-blog-form">
        <label htmlFor="title">Title</label>
        <input type="text" />
        <br />
        <label htmlFor="content">Content</label>
        <textarea className="create-blog-content" />
        <br />
        <label htmlFor="image">Image</label>
        <input type="file" id="image" name="image" className="create-blg-img" />
        <br />
        <section className="create-blog-cta">
          <button className="create-blog-btn cancel">Cancel</button>
          <button className="create-blog-btn">Create Blog</button>
        </section>
      </form>
    </main>
  );
}
