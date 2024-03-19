import React from "react";
import ReplyCard from "./ReplyCard";

export default function ReplyList({ comment }) {
  return (
    <ul>
      {comment.replies.length > 0
        ? comment.replies.map((reply) => (
            <ReplyCard key={reply.commentId} reply={reply.commentId} />
          ))
        : ""}
    </ul>
  );
}
