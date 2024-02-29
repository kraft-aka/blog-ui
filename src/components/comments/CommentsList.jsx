import CommentCard from "./CommentCard";
import "./CommentsList.scss";

export default function CommentsList({ comments, setCommentsFetched }) {
  return (
    <section className="comments-list-container">
      <header className="comments-list-header">
        <h1>Last comments</h1>
      </header>
      <article className="comment-list-items">
        {comments.map((comment) => (
          <CommentCard key={comment._id} comment={comment} setCommentsFetched={setCommentsFetched} comments={comments}/>
        ))}
      </article>
    </section>
  );
}
