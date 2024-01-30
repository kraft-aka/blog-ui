import React, { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import "./BlogRoll.scss";
import { getAllBlogs } from "../../API/blogs";

const arrayBlogs = [
  {
    _id: "655dd1d8734374413f5ba324",
    userName: "John Doe",
    title: "News for today.",
    blogContent: "Hi all. It is rainy today.",
    createdBy: "655531932029b4786d488892",
    likes: [
      {
        user: "655f2a1b8f894440b8a8808a",
        _id: "656710f5d06280551e8df334",
      },
    ],
    createdAt: "2023-11-22T10:03:04.730Z",
    updatedAt: "2023-11-22T10:03:04.730Z",
    __v: 1,
  },
  {
    _id: "65605f49f3b1029cd58ed88c",
    userName: "John Doe",
    title: "Friday's blog",
    blogContent: "It is rainy today.",
    createdBy: "65605ee2f3b1029cd58ed886",
    likes: [],
    createdAt: "2023-11-24T08:31:05.688Z",
    updatedAt: "2023-11-24T08:31:05.688Z",
    __v: 0,
  },
  {
    _id: "65631f6fd54443b4f03a8a1c",
    userName: "John Doe",
    title: "Sonntag's Blog",
    blogContent: "Es ist jetzt sonning geworden.",
    createdBy: "65605ee2f3b1029cd58ed886",
    likes: [
      {
        user: "65605ee2f3b1029cd58ed886",
        _id: "65632ac73a1faf3e7389b83d",
      },
    ],
    createdAt: "2023-11-26T10:35:27.896Z",
    updatedAt: "2023-11-26T10:35:27.897Z",
    __v: 1,
  },
  {
    _id: "65649459202f5bb01b478a94",
    title: "Montag's Blog",
    userName: "Nguen Blabla",
    blogContent: "Es schneit heute.",
    createdBy: "65605ee2f3b1029cd58ed886",
    createdAt: "2023-11-27T13:06:33.162Z",
    updatedAt: "2023-11-27T13:06:33.162Z",
    likes: [],
    __v: 2,
  },
  {
    _id: "6564b005bbb0ec4ed0d15973",
    userName: "John Doe",
    title: "Monday",
    blogContent: "It is snowing today.",
    createdBy: "655f2a1b8f894440b8a8808a",
    createdAt: "2023-11-27T15:04:37.824Z",
    updatedAt: "2023-11-27T15:04:37.824Z",
    likes: [],
    __v: 4,
  },
];

export default function BlogRoll() {
  const [blogs, setBlogs] = useState(arrayBlogs);

  useEffect(() => {
    getAllBlogs().then((fetchedBlogs)=> setBlogs(fetchedBlogs))
  }, []);

  return (
    <div className="blog-roll-container">
      <header className="blog-roll-header">
        <h2 className="blog-roll-title">Latest Posts</h2>
        <p className="blog-roll-length">{arrayBlogs.length} Blogs</p>
      </header>
      {blogs.map((blog) => (
        <BlogCard blog={blog} key={blog._id} />
      ))}
    </div>
  );
}
