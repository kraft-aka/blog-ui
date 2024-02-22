import React, { useState } from "react";
import "./CreateBlog.scss";
import { createBlog, addImage } from "../../API/blogs";
import { inputValueIsValid } from "../../utils/inputValueIsValid";
import toast from "react-hot-toast";
import { useBlog } from "../../providers/blogProvider";

export default function CreateBlog() {
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [errorMsg, setErrorMsg] = useState(false);
  const [image, setImage] = useState(null);
  const { blogs, addNewBlog } = useBlog();


  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const submitBlog = async (e) => {
    e.preventDefault();

    if (!inputValueIsValid(newTitle) || !inputValueIsValid(newContent)) {
      setErrorMsg(true);
      return;
    }
    const blog = await createBlog({
      title: newTitle,
      blogContent: newContent,
    });
    if (blog) {
      setErrorMsg(false);
      setNewTitle("");
      setNewContent("");
      const blogId = blog.createdBlog._id;
      const formData = new FormData();
      formData.append("uploadFile", image);
      addImage(blogId, formData);
      addNewBlog(blog)
      toast.success("Blog has been successfully published!");
    } else {
      toast.error("Error occured!");
    }
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
        <input
          type="file"
          id="image"
          name="image"
          className="create-blg-img"
          onChange={handleImageChange}
        />
        <br />
        <section className="create-blog-cta">
          <input type="reset" className="create-blog-btn cancel" />
          <input type="submit" className="create-blog-btn" />
        </section>
      </form>
    </main>
  );
}
