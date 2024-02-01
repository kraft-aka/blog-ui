import { useState, useEffect } from "react";
import { getComments } from "../API/comments";
import CommentCard from "./CommentCard";
import './CommentsList.scss';

export default function CommentsList() {
  const [commentsFetched, setCommentsFetched] = useState([]);

  useEffect(() => {
    getComments().then((comments) => setCommentsFetched(comments));
  }, []);

  return (
    <section className="comments-list-container">
      <header className="comments-list-header">
        <h1>Last comments</h1>
      </header>
      {!commentsFetched && <CommentCard commentsFetched={commentsFetched} />}
    </section>
  );
}
