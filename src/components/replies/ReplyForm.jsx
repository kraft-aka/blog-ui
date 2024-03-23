import React, { useState, useEffect } from "react";
import { addReply } from "../../API/comments";
import toast from 'react-hot-toast'
import { inputValueIsValid } from '../../utils/inputValueIsValid'

export default function ReplyForm({ comment, setCommentsFetched, comments }) {
  const [replyInput, setReplyInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrorMsg] = useState(false);

  async function handleReplySubmit(e) {
    e.preventDefault();
    if (!inputValueIsValid(replyInput)) {
      errMsg(true);
      return;
    }
    try {
      const id = comment._id;
      //comment.replies.push({  })
      const newReply = await addReply(id, replyInput)
      //comments.find(c=> c)
      



    } catch (error) {
      toast.error('Error occured!')
    }

  }

  return (
    <div>
      <form onSubmit={handleReplySubmit}>
        <label htmlFor="reply">Reply</label>
        <input
          type="text"
          onChange={(e) => setReplyInput(e.target.value)}
          value={replyInput}
          name="reply"
          id="reply"
        />
        <button type="submit">Reply</button>
      </form>
    </div>
  );
}
