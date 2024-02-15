import React, { useState, useEffect } from "react";
import "./BlogsList.scss";
import { getUserBlogs } from "../../API/blogs";
import BlogPublishedCard from "./BlogPublishedCard";
import { deleteBlog } from "../../API/blogs";
import { useAuth } from "../../providers/authProvider";

export default function BlogsList({ handleEdit, showEdit, setShowEdit}) {
  const [blogs, setBlogs] = useState([]);
  const { loggedUser } = useAuth();

  useEffect(() => {
    getUserBlogs(loggedUser.id).then((userBlogs) => setBlogs(userBlogs));
  }, [loggedUser.id]);


  function handleDeleteBlog(blogId) {
    deleteBlog(blogId)
      .then((response) => {
        if (response) {
          setBlogs(blogs.filter((b) => b._id != blogId));
        } else {
          alert('Can not remove this blog');
        }
      })
      .catch((err) => alert('Can not remove this blog'));
  }

  const userBlogs = blogs.map((userBlog) => {
    return (
      <BlogPublishedCard
        key={userBlog._id}
        blogs={userBlog}
        handleDeleteBlog={handleDeleteBlog}
        handleEdit={handleEdit}
        showEdit={showEdit}
        setShowEdit={setShowEdit}
      />
    );
  });

  return (
    <main className="blogs-list-container">
      <header className="blogs-list-header">
        <h3>
          Published Blogs <span>({userBlogs.length})</span>
        </h3>
      </header>
      <section className="blogs-list-items">
        <>{userBlogs}</>
      </section>
      <section className="blogs-list-info">
        <h3>Infographics</h3>
        <div className="blogs-list-info-total-likes">
          <p>
            Total Likes: <span>2</span>
          </p>
        </div>
        <div className="blogs-list-info-total-blogs">
          <p>
            Total Blogs: <span> {userBlogs.length} </span>
          </p>
        </div>
        <div className="blogs-list-info-total-comments">
          <p>
            Total Comments: <span>5 </span>
          </p>
        </div>
      </section>
    </main>
  );
}
