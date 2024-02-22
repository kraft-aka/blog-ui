import React from "react";
import BlogCard from "./BlogCard";
import "./BlogRoll.scss";
import { useBlog } from "../../providers/blogProvider";
import Pagination from "../pagination/Pagination";

export default function BlogRoll() {
  const { blogs, currentPage, currentBlogsLimit, pagesCount, setCurrentPage } =
    useBlog();

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
          <section className="blog-roll-pagination">
            <Pagination
              currentPage={currentPage}
              currentBlogsLimit={currentBlogsLimit}
              pagesCount={pagesCount}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </section>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}{" "}
    </>
  );
}
