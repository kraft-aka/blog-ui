import React, { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import "./BlogRoll.scss";
import { getAllBlogs } from "../../API/blogs";
import { useBlog } from "../../providers/blogProvider";
import Pagination from "../pagination/Pagination";
import LoadingSpinner from "../UI/LoadingSpinner";

export default function BlogRoll() {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentBlogsLimit, setCurrentBlogsLimit] = useState(3);
  const [pagesCount, setPagesCount] = useState(18);
  const [isLoading, setIsLoading] = useState(false);

  const { SetBlogs } = useBlog();

  // all blogs from DB
  useEffect(() => {
    getAllBlogs(currentPage, currentBlogsLimit).then((loadedBlogs) => {
      setIsLoading(true);
      setBlogs(loadedBlogs);
      SetBlogs(loadedBlogs);
      setIsLoading(false);
    });
  }, [currentPage, currentBlogsLimit]);

  return (
    <>
      {blogs ? (
        <div className="blog-roll-container">
          <header className="blog-roll-header">
            <h2 className="blog-roll-title">Latest Posts</h2>
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
        <LoadingSpinner isLoading={isLoading.toString()} />
      )}
    </>
  );
}
