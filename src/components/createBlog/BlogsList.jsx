import React, { useState, useEffect } from "react";
import "./BlogsList.scss";
import { getUserBlogs } from "../../API/blogs";
import BlogPublishedCard from "./BlogPublishedCard";
import { deleteBlog } from "../../API/blogs";
import { useAuth } from "../../providers/authProvider";
// import axiosInstance from '../../API/axiosInstance';

export default function BlogsList() {
  const [blogs, setBlogs] = useState([]);
  const { loggedUser } = useAuth();

  useEffect(() => {
    getUserBlogs().then((userBlogs) => setBlogs(userBlogs));
  }, [loggedUser.id]);

  // filter out the blogs of particular user
  const renderBlogs = blogs.filter(b => b.createdBy._id == loggedUser.id)


  function handleDeleteBlog(blogId) {
    // axiosInstance.delete(`${blogId}`);
    deleteBlog()
      .then((response) => {
        if (response.ok) {
          setBlogs(userBlogs.filter((b) => b._id != blogId));
        } else {
          throw new Error("Failed to delete blog", response.status);
        }
      })
      .catch((err) => console.log(err));
  }

  const userBlogs = renderBlogs.map((userBlog) => {
    return (
      <BlogPublishedCard blogs={userBlog} handleDeleteBlog={handleDeleteBlog} />
    );
  });

  return (
    <main className="blogs-list-container">
      <header className="blogs-list-header">
        <h3>Published Blogs</h3>
      </header>
      <section className="blogs-list-items">
        <>{userBlogs}</>
      </section>
      <section className="blogs-list-info">
        <h3>Infographics</h3>
        <div className="blogs-list-info-total-likes">
          <p>Total Likes</p>
          <p>15</p>
        </div>
        <div className="blogs-list-info-total-blogs">
          <p>Total Blogs</p>
          <p>3</p>
        </div>
      </section>
    </main>
  );
}
