import React, {
  createContext,
  useContext,
  useMemo,
  useEffect,
  useState,
} from "react";
const BlogContext = createContext();
import { getAllBlogs } from "../API/blogs";

const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);

  const addNewBlog = (newBlog) => {
    setBlogs([newBlog, ...blogs]);
  };

  // all blogs from DB
  useEffect(() => {
    getAllBlogs().then((loadedBlogs) => setBlogs(loadedBlogs));
  }, []);

  console.log(blogs)

  const contextValue = () => ({
    blogs,
    addNewBlog,
  });

  return (
    <BlogContext.Provider value={contextValue}>{children}</BlogContext.Provider>
  );
};

export const useBlog = () => {
  return useContext(BlogContext);
};

export default BlogProvider;
