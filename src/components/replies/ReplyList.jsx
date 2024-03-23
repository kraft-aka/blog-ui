import React from "react";
import ReplyCard from "./ReplyCard";

export default function ReplyList({ replies }) {
  return (
    <ul>
      {replies.length > 0
        ? replies.map((reply) => (
            <ReplyCard key={reply.commentId} reply={reply} />
          ))
        : ""}
    </ul>
  );
}
