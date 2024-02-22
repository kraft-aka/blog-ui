import React from "react";
import BlogCard from "./BlogCard";
import "./BlogRoll.scss";
import { useBlog } from "../../providers/blogProvider";

export default function BlogRoll() {
  const {blogs} = useBlog();

  return (
    <>
      {blogs ? (
        <div className="blog-roll-container">
          <header className="blog-roll-header">
            <h2 className="blog-roll-title">Latest Posts</h2>
            <p className="blog-roll-length">{blogs.length} Blogs</p>
          </header>
          {blogs.map((blog) => (
            <BlogCard blog={blog} key={blog._id} />
          ))}
        </div>
      ) : (
        <h1>Loading...</h1>
      )}{" "}
    </>
  );
}
