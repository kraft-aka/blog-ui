import React, { createContext, useContext, useState } from "react";
const BlogContext = createContext();

const BlogProvider = ({ children }) => {
  const [fetchedBlogs, setFetchedBlogs] = useState([]);

  const SetBlogs = (newBlogs) => setFetchedBlogs(newBlogs)

  const addNewBlog = (newBlog) => {
    setFetchedBlogs((prevBlogs) => {
      [newBlog, ...prevBlogs];
    });
  };

  return (
    <BlogContext.Provider value={{addNewBlog,SetBlogs,fetchedBlogs}}>{children}</BlogContext.Provider>
  );
};

export const useBlog = () => {
  return useContext(BlogContext);
};

export default BlogProvider;
