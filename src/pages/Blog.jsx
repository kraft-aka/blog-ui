import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import like from "../assets/like.svg";
import comment from "../assets/comment.svg";
import arrowLeft from "../assets/arrow-left.svg";
import { getBlog } from "../API/blogs";
import { basePath } from "../API/axiosInstance";
import "./Blog.scss";
import formatDate from "../utils/formatDate";

export default function Blog() {
  const [singleBlog, setSingleBlog] = useState(null);
  const { id } = useParams();

  
  useEffect(() => {
    getBlog(id).then((sb) => setSingleBlog(sb));
  }, [id]);
  

  console.log(singleBlog);
  let srcImg =
    "https://images.unsplash.com/photo-1682685797741-f0213d24418c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D";
  if (singleBlog) {
    //srcImg = basePath + singleBlog.blog.blogImage.slice(1)
    console.log(basePath + singleBlog.blog.blogImage)
  }

  return (
    <>
      {singleBlog ? (
        <main className="blog-container">
          <section className="blog-container-top">
            <header className="blog-header">
              <h1 className="blog-title">{singleBlog.blog.title}</h1>
              <img src={srcImg} alt="user-icon" className="blog-user-icon" />
              <span>{singleBlog.blog.createdBy.userName}</span>
              <p className="blog-date">
                {formatDate(singleBlog.blog.createdAt)}
              </p>
              <div className="blog-like-comment-container">
                <p className="blog-like-comment">
                  {singleBlog.blog.likes.length}
                </p>
                <img src={comment} alt="comment icon" className="blog-icon" />
                <p className="blog-like-comment">|</p>
                <p className="blog-like-comment">
                  {singleBlog.blog.likes.length}
                </p>
                <img src={like} alt="thumb up" className="blog-icon" />
              </div>
            </header>
            <figure className="blog-figure">
              <img src={srcImg} alt="main image" className="blog-img" />
              <figcaption>Photograph: { }</figcaption>
            </figure>
          </section>
          <section className="blog-content">
            <p>{singleBlog.blog.blogContent}</p>
            <div className="blog-comment-like-section">
              <div className="blog-sub-container">
                <div className="blog-sub-container-item-1">
                  <img src={comment} alt="" className="blog-icon" />
                  <span className="blog-add-comment">Add comment...</span>
                </div>
                <div className="blog-sum-container-item-1">
                  <span className="blog-add-like">
                    {singleBlog.blog.likes.length}
                  </span>
                  <img src={like} alt="" className="blog-icon" />
                </div>
              </div>
              <div className="blog-cta">
                <p className="blog-author">
                  Written by {singleBlog.blog.createdBy.userName}
                </p>
                <div className="blog-arrow">
                  <Link to="/">
                    <img src={arrowLeft} alt="" />
                  </Link>
                  <span className="blog-arrow-text">Back</span>
                </div>
              </div>
            </div>
          </section>
        </main>
      ) : (
        <h1>Loading...</h1>
      )}{" "}
    </>
  );
}
