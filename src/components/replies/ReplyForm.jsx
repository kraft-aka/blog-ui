import React, { useState } from "react";

export default function ReplyForm() {
  const [replyInput, setReplyInput] = useState("");
  return (
    <div>
      <form>
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
