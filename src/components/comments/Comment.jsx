import { useState } from "react";
import CommentsList from "./CommentsList";
import "./Comment.scss";
import { inputValueIsValid } from "../../utils/inputValueIsValid";
import { addComment } from "../../API/comments";
import { toast } from "react-hot-toast";
import { useAuth } from "../../providers/authProvider";
import userIcon from '../../assets/user-icon.jpg'
import { basePath } from "../../API/axiosInstance";

function Comment({ closeComment, blogId, comments, setCommentsFetched, addNewComment }) {
  const [inputValue, setInputValue] = useState("");
  const [errorMsg, setErrorMsg] = useState(false);
  const { loggedUser } = useAuth();
  const userName = loggedUser ? loggedUser.userName : "user";

  function inputValueChangeHandler(e) {
    setInputValue(e.target.value);
  }

  function inputValueClearHandler() {
    setInputValue("");
  }

  const newComment = {
    commentText: inputValue,
  };

  function submitCommentForm(e) {
    e.preventDefault();
    if (!inputValueIsValid(inputValue)) {
      setErrorMsg(true);
      return;
    } else {
      addComment(blogId, newComment).then((response) => { });
      setErrorMsg(false);
      inputValueClearHandler();
      // addNewComment(newComment)
      toast.success("Comment submitted successfully!");
    }
  }

  let srcImg = userIcon

  if(loggedUser && loggedUser.userIcon) {
    srcImg = basePath + loggedUser.userIcon.slice(1)
  }
    

  return (
    <aside className="comment-container">
      <header className="comment-header">
        <h2 className="comment-title">
          Comments <span>({comments.length})</span>
        </h2>
        <p className="comment-close-btn" onClick={closeComment}>
          X
        </p>
      </header>

      {loggedUser && (
        <form className="comment-form" onSubmit={submitCommentForm}>
          <section className="icon-name-container">
            <img src={srcImg} alt="user icon" className="comment-user-icon" />
            <p className="user-name-comment">{userName}</p>
          </section>
          {errorMsg && (
            <p className="comment-error-msg">Comment must not be empty</p>
          )}
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
      )}
      <CommentsList comments={comments} setCommentsFetched={setCommentsFetched} />
    </aside>
  );
}

export default Comment;
