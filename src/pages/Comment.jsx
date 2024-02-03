import { useState } from "react";
import CommentsList from '../components/comments/CommentsList'
import "./Comment.scss";
import inputValueIsValid from "../utils/inputValueIsValid";

function Comment({ closeComment }) {
  const [inputValue, setInputValue] = useState("");

  function inputValueChangeHandler(e) {
    console.log(e.target.value);
    setInputValue(e.target.value);
  }

  function inputValueClearHandler() {
    setInputValue("");
  }


  function submitCommentForm(e) {
    e.preventDefault();
    if (inputValue == inputValueIsValid(inputValue)) {
      console.log("empty comment can not be submitted");
      return;
    } else {
      console.log("submitted");
    }
  }

  let srcImg =
    "https://images.unsplash.com/photo-1682685797741-f0213d24418c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D";

  return (
    <aside className="comment-container">
      <header className="comment-header">
        <h2 className="comment-title">
          Comments <span>()</span>
        </h2>
        <p className="comment-close-btn" onClick={closeComment}>
          X
        </p>
      </header>

      <form className="comment-form" onSubmit={submitCommentForm}>
        <section className="icon-name-container">
          <img src={srcImg} alt="user icon" className="comment-user-icon" />
          <p className="user-name-comment">Some name jfksdkjf</p>
        </section>
        <textarea
          className="comment-text"
          onChange={inputValueChangeHandler}
          value={inputValue}
          name="comment"
          id="comment"
          placeholder="Type here..."
        />
        <section className="comment-cta-btns">
          <button
            type="button"
            className="comment-btn cancel"
            onClick={inputValueClearHandler}
          >
            Cancel
          </button>
          <button type="submit" className="comment-btn">
            Comment
          </button>
        </section>
      </form>
      <CommentsList />
    </aside>
  );
}

export default Comment;
