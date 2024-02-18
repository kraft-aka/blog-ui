import React, { useState } from "react";
import "./CreateBlog.scss";
import { createBlog } from "../../API/blogs";
import { inputValueIsValid } from "../../utils/inputValueIsValid";
import toast from 'react-hot-toast';

export default function CreateBlog() {
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [errorMsg, setErrorMsg] = useState(false);

  const submitBlog = async (e) => {
    e.preventDefault();

    if (!inputValueIsValid(newTitle) || !inputValueIsValid(newContent)) {
      setErrorMsg(true);
      return;
    }
    await createBlog({
      title: newTitle,
      blogContent: newContent,
    });
    setErrorMsg(false);
    setNewTitle("");
    setNewContent("");
    toast.success('Blog has been successfully published!')
  };

  return (
    <main className="create-blog-container">
      <header className="create-blog-header">
        <h3> Create Blog</h3>
      </header>
      <form className="create-blog-form" onSubmit={submitBlog}>
        <label htmlFor="title">Title</label>
        {errorMsg && <p className="blog-error-msg">Title must not be empty</p>}
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <br />
        <label htmlFor="content">Content</label>
        {errorMsg && (
          <p className="blog-error-msg">Content must not be empty</p>
        )}
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
