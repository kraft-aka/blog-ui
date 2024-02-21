import React, { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import "./BlogRoll.scss";
import { getAllBlogs } from "../../API/blogs";
import { useBlog } from "../../providers/blogProvider";


export default function BlogRoll() {
  const [blogs, setBlogs] = useState([]);

  const sortedBlogs = blogs.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  useEffect(() => {
    getAllBlogs().then((fetchedBlogs) => setBlogs(fetchedBlogs));
  }, []);


  return (
    <>
      {blogs ? (
        <div className="blog-roll-container">
          <header className="blog-roll-header">
            <h2 className="blog-roll-title">Latest Posts</h2>
            <p className="blog-roll-length">{blogs.length} Blogs</p>
          </header>
          {sortedBlogs.map((blog) => (
            <BlogCard blog={blog} key={blog._id} />
          ))}
        </div>
      ) : (
        <h1>Loading...</h1>
      )}{" "}
    </>
  );
}
