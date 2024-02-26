import { useState, useEffect } from "react";
import { getComments } from "../../API/comments";
import CommentCard from "./CommentCard";
import "./CommentsList.scss";
import { useParams } from "react-router-dom";

export default function CommentsList() {
  const [commentsFetched, setCommentsFetched] = useState([]);
  const [isLoading, setIsloading] = useState(false)

  const { id } = useParams();

  useEffect(() => {
    getComments(id).then((comments) => {
      setIsloading(true)
      setCommentsFetched(comments)
      setIsloading(false)
    });
  }, []);

  return (
    <section className="comments-list-container">
      <header className="comments-list-header">
        <h1>Last comments</h1>
      </header>
      { commentsFetched.map((comment) => 
       ( 
        <CommentCard
          key={comment._id}
          comment={comment}
        />
      ))}
    </section>
  );
}
