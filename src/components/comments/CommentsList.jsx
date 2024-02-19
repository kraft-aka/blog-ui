import { useState, useEffect } from "react";
import { getComments } from "../../API/comments";
import CommentCard from "./CommentCard";
import "./CommentsList.scss";

export default function CommentsList() {
  const [commentsFetched, setCommentsFetched] = useState([]);
  const [isLoading, setIsloading] = useState(false)

  useEffect(() => {
    getComments().then((comments) => {
      setIsloading(true)
      setCommentsFetched(comments)
      setIsloading(false)
    });
  }, []);

  const commentsPublished = commentsFetched.map((comment) => {
    <CommentCard
      key={comment._id}
      user={comment.userId.userName}
      createdAt={comment.createdAt}
      commentTex={comment.commentText}
      likes = {comment.likes}
    />;
  });

  return (
    <section className="comments-list-container">
      <header className="comments-list-header">
        <h1>Last comments</h1>
      </header>
      { isLoading && {commentsPublished}}
    </section>
  );
}
