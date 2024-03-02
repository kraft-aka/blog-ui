import React from "react";
import like from "../../assets/like.svg";
import liked from "../../assets/liked.svg";
import commentIcon from "../../assets/comment.svg";
import userIcon from '../../assets/user-icon.jpg'
import "./CommentCard.scss";
import formatDate from "../../utils/formatDate";
import { deleteComment, addLikeToComment } from "../../API/comments";
import toast from "react-hot-toast";
import { useAuth } from "../../providers/authProvider";

export default function CommentCard({ comment, comments, setCommentsFetched }) {
  const {
    createdAt,
    commentText,
    likes,
    userId
  } = comment;

  const { userName, _id } = userId;

  
  const { loggedUser } = useAuth();
  let imgSrc = { userIcon }
  const ownLike = loggedUser ? likes.find((i) => i.user === loggedUser.id) : [];


  if (loggedUser) {
    imgSrc = loggedUser
  }

  // deletes comment
  const deleteCommentHandler = async (e) => {
    e.preventDefault();
    try {
      if (loggedUser.id === _id) {
        await deleteComment(comment._id);
        setCommentsFetched(comments.filter((c) => c._id !== comment._id));
        toast.success("Comment sucessfully deleted!");
      } else {
        toast.error("Can not delete comment!");
      }
    } catch (error) {
      toast.error("Could not delete comment!");
    }
  };
 

  //adds like to comment
  const addLikeHandler = async () => {
    try {
      const updateComment = comments.find(c=> c._id === comment._id);
      if (updateComment) {
        updateComment.likes.push({ user: loggedUser.id })
      }
       await addLikeToComment(comment._id);
       setCommentsFetched([...comments]);
      toast.success("Like added!");
    } catch (error) {
      toast.error("Error occured!");
    }
  };
  //TODO:
  // refactor addLikeHandler -> throws error

  return (
    <section className="comment-card-container">
      <header className="comment-card-header">
        <img src={imgSrc} alt="user icon" className="comment-card-user-icon" />
        <div className="comment-card-username-date-cont">
          <p className="comment-card-username">{userName}</p>
          <p className="comment-card-date">{formatDate(createdAt)}</p>
        </div>
      </header>
      <div className="comment-card-content-container">
        <p className="comment-card-text">{commentText}</p>
      </div>
      <div className="comment-card-cta">
        <div className="comment-card-cta-item-1">
          <p className="comment-card-like">{likes.length}</p>
          {ownLike ? (
            <img
              src={liked}
              alt="filled like icon"
              className="blog-icon"
              style={{ marginLeft: ".5rem" }}
            />
          ) : (
            <img
              src={like}
              alt=""
              className="blog-icon"
              onClick={() => addLikeHandler(comment._id)}
            />
          )}
        </div>
        <img src={commentIcon} alt="comment cloud" />
        {loggedUser && (
          <button className="comment-card-btn" onClick={deleteCommentHandler}>
            Delete
          </button>
        )}
      </div>
    </section>
  );
}
