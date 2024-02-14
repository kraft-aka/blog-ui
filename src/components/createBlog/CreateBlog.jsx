import React, { useState } from "react";
import "./CreateBlog.scss";
import { createBlog } from "../../API/blogs";

export default function CreateBlog() {
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  const submitBlog = async (e) => {
    e.preventDefault();
    const blog = await createBlog({
      title: newTitle,
      blogContent: newContent,
    });
    setNewTitle("");
    setNewContent("");
  };

  return (
    <main className="create-blog-container">
      <header className="create-blog-header">
        <h3> Create Blog</h3>
      </header>
      <form className="create-blog-form" onSubmit={submitBlog}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <br />
        <label htmlFor="content">Content</label>
        <textarea
          className="create-blog-content"
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
        />
        <br />
        <label htmlFor="image">Image</label>
        <input type="file" id="image" name="image" className="create-blg-img" />
        <br />
        <section className="create-blog-cta">
          <input type="reset" className="create-blog-btn cancel" />
          <input type="submit" className="create-blog-btn" />
        </section>
      </form>
    </main>
  );
}
