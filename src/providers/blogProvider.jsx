import React, { createContext, useContext, useEffect, useState } from "react";

import { getAllBlogs, getPaginatedBlogs } from "../API/blogs";
import { useAuth } from "./authProvider";
const BlogContext = createContext();

const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]); // all blogs
  const [userBlogs, setUserBlogs] = useState([]); //user's blogs
  const [pagesCount, setPagesCount] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentBlogsLimit, setCurrentBlogsLimit] = useState(3);

  const { loggedUser } = useAuth();

  // adds new blog
  const addNewBlog = (newBlog) => {
    setBlogs([newBlog, ...blogs]);
  };

  // all blogs from DB
  useEffect(() => {
    getAllBlogs().then((loadedBlogs) => setBlogs(loadedBlogs));
  }, []);

  // all user blogs
  useEffect(() => {
    getPaginatedBlogs(loggedUser.id, currentPage, currentBlogsLimit).then(
      (uBlogs) => {
        setUserBlogs(uBlogs.blogs);
        setPagesCount(uBlogs.results.pages);
      }
    );
  }, [loggedUser.id, currentPage]);

  return (
    <BlogContext.Provider
      value={{
        blogs,
        addNewBlog,
        userBlogs,
        pagesCount,
        setUserBlogs,
        currentPage,
        currentBlogsLimit,
        setCurrentPage,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export const useBlog = () => {
  return useContext(BlogContext);
};

export default BlogProvider;
