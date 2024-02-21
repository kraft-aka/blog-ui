import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Comment from "./Comment";
import { getBlog } from "../API/blogs";
import { basePath } from "../API/axiosInstance";
import formatDate from "../utils/formatDate";
import "./Blog.scss";
import arrowLeft from "../assets/arrow-left.svg";
import comment from "../assets/comment.svg";
import like from "../assets/like.svg";

export default function Blog() {
  const [singleBlog, setSingleBlog] = useState(null);
  const [showComment, setShowComment] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  function addComment() {
    setShowComment(true);
  }

  function closeComment() {
    setShowComment(false);
  }

  useEffect(() => {
    getBlog(id).then((sb) => {
      setSingleBlog(sb);
    });
  }, [id]);

  let srcImg =
    "https://images.unsplash.com/photo-1682685797741-f0213d24418c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D";

  let srcIcon =
    "https://images.unsplash.com/photo-1682685797741-f0213d24418c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D";
  if (singleBlog && singleBlog.blog && singleBlog.blog.blogImage) {
    srcImg = basePath + singleBlog.blog.blogImage.slice(1);
  }

  if (singleBlog && singleBlog.blog && singleBlog.blog.createdBy.userIcon) {
    srcIcon = basePath + singleBlog.blog.createdBy.userIcon.slice(1);
  }

  return (
    <>
      {singleBlog ? (
        <main className="blog-container">
          <section className="blog-container-top">
            <header className="blog-header">
              <h1 className="blog-title">{singleBlog.title}</h1>
              <img src={srcIcon} alt="user-icon" className="blog-user-icon" />
              <span>{singleBlog.createdBy.userName}</span>
              <p className="blog-date">{formatDate(singleBlog.createdAt)}</p>
              <div className="blog-like-comment-container">
                <p className="blog-like-comment">{singleBlog.likes.length}</p>
                <img src={comment} alt="comment icon" className="blog-icon" />
                <p className="blog-like-comment">|</p>
                <p className="blog-like-comment">{singleBlog.likes.length}</p>
                <img src={like} alt="thumb up" className="blog-icon" />
              </div>
            </header>
            <figure className="blog-figure">
              <img src={srcImg} alt="main image" className="blog-img" />
              <figcaption>Photograph: {}</figcaption>
            </figure>
          </section>
          <section className="blog-content">
            <p>{singleBlog.blogContent}</p>
            <div className="blog-comment-like-section">
              <div className="blog-sub-container">
                <div className="blog-sub-container-item-1">
                  <img src={comment} alt="" className="blog-icon" />
                  <span className="blog-add-comment" onClick={addComment}>
                    Add comment...
                  </span>
                </div>
                <div className="blog-sum-container-item-1">
                  <span className="blog-add-like">
                    {singleBlog.likes.length}
                  </span>
                  <img src={like} alt="" className="blog-icon" />
                </div>
              </div>
              <div className="blog-cta">
                <p className="blog-author">
                  Written by {singleBlog.createdBy.userName}
                </p>
                <div className="blog-arrow" onClick={() => navigate(-1)}>
                  <img src={arrowLeft} alt="arrow back" />

                  <span className="blog-arrow-text">Back</span>
                </div>
              </div>
            </div>
          </section>
          {showComment && (
            <Comment closeComment={closeComment} blogId={singleBlog._id} />
          )}
        </main>
      ) : (
        <h1>Loading...</h1>
      )}{" "}
    </>
  );
}
