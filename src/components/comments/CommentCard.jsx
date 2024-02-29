import React from "react";
import like from "../../assets/like.svg";
import commentIcon from "../../assets/comment.svg";
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
    userId: { userName },
    userId: { _id },
  } = comment;
  const { loggedUser } = useAuth();
  let imgSrc =
    "https://images.unsplash.com/photo-1705848533403-6a5427e6f466?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8";

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
      await addLikeToComment(comment._id);
      setCommentsFetched((prevComments) => [comment._id, ...prevComments]);
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
          <img src={like} alt="thumb up" onClick={addLikeHandler} />
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
