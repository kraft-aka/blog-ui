import React, { useState } from "react";
import "./EditBlog.scss";
import { editBlog, addImage } from "../../API/blogs";
import toast from "react-hot-toast";

export default function EditBlog({ handleEditClose, blogs }) {
  const [editTitle, setEditTitle] = useState(blogs.title);
  const [editContent, setEditContent] = useState(blogs.blogContent);
  const [updatedBlog, setUpdatedBlog] = useState(null);
  const [img, setImg] = useState(null);

  function handleTitleChange(e) {
    setEditTitle(e.target.value);
  }

  function handleContentChange(e) {
    setEditContent(e.target.value);
  }

  const handleImageChange = (e) => {
    setImg(e.target.files[0]);
  };

  const editedBlog = {
    title: editTitle,
    blogContent: editContent,
  };

  async function handleSubmitEditBlog(e) {
    e.preventDefault();
    setUpdatedBlog(false)
    try {
      const blog = await editBlog(blogs._id, editedBlog);
      if (blog) {
        const blogId = blog.data.blog._id;
        if (img) {
          const formData = new FormData();
          formData.append("uploadFile", img);
          await addImage(blogId, formData);
        }
        setUpdatedBlog(true)
        toast.success("Blog has been successfully updated!");
        handleEditClose();
      } else {
        toast.error("Failed to update the Blog.");
      }
    } catch (err) {
      toast.error(err.message);
    }
  }

  return (
    <main className="edit-blog-modal">
      <section className="edit-blog-container">
        <header className="edit-blog-header">
          <h3>Edit Your Blog</h3>
        </header>
        <form className="edit-blog-form" onSubmit={handleSubmitEditBlog}>
          <label htmlFor="edit-blog-title">Title</label>
          <input type="text" value={editTitle} onChange={handleTitleChange} />
          <br />
          <label htmlFor="edit-blog-content">Content</label>
          <textarea value={editContent} onChange={handleContentChange} />
          <br />
          <label htmlFor="image">Image</label>
          <input
            type="file"
            className="blog-edit-img"
            id="image"
            name="image"
            onChange={handleImageChange}
          />
          <div className="edit-blog-cta">
            <input type="submit" className="edit-blog-btn" />
            <input
              type="reset"
              onClick={handleEditClose}
              className="edit-blog-btn cancel"
            />
          </div>
        </form>
      </section>
    </main>
  );
}
