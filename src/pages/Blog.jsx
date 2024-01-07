import React from "react";
import { useParams, Link } from "react-router-dom";
import like from "../assets/like.svg";
import comment from "../assets/comment.svg";
import arrowLeft from "../assets/arrow-left.svg";
import "./Blog.scss";

export default function Blog() {
  const { id } = useParams();
  return (
    <main className="blog-container">
      <section className="blog-container-top">
        <header className="blog-header">
          <h1 className="blog-title">
            In a laoreet purus. Integer turpis quam, laoreet id orci nec, ul
          </h1>
          <img src="" alt="user-icon" className="blog-user-icon" />
          <span>{}By John Doe</span>
          <p className="blog-date">11/12/2023</p>
          <div className="blog-like-comment-container">
            <p className="blog-like-comment">2</p>
            <img src={comment} alt="comment icon" className="blog-icon" />
            <p className="blog-like-comment">|</p>
            <p className="blog-like-comment">12</p>
            <img src={like} alt="thumb up" className="blog-icon" />
          </div>
        </header>
        <figure className="blog-figure">
          <img src="" alt="main image" className="blog-img" />
          <figcaption>Photograph: {}</figcaption>
        </figure>
      </section>
      <section className="blog-content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ducimus
          fugiat tempora, perferendis quis asperiores! Obcaecati placeat aut
          beatae, sint accusantium recusandae tenetur dolorum maiores sed itaque
          neque labore veritatis!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
          eius repudiandae quam ad! Earum inventore distinctio fugit nesciunt
          non aspernatur in amet nobis, temporibus reiciendis veniam id
          voluptatum, tempora ipsam.
        </p>
        <div className="blog-comment-like-section">
          <div className="blog-sub-container">
            <div className="blog-sub-container-item-1">
              <img src={comment} alt="" className="blog-icon" />
              <span className="blog-add-comment">Add comment...</span>
            </div>
            <div className="blog-sum-container-item-1">
              <span className="blog-add-like">12</span>
              <img src={like} alt="" className="blog-icon" />
            </div>
          </div>
          <div className="blog-cta">
            <p className="blog-author">Written by John Doe</p>
            <div className="blog-arrow">
              <Link to='/'><img src={arrowLeft} alt="" /></Link>
              <span className="blog-arrow-text">Back</span>
            </div>
          </div>
        </div>
      </section>
      {id}
    </main>
  );
}
