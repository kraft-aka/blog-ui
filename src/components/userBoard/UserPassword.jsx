import React, { useState } from "react";
import { inputValueIsValid } from "../../utils/inputValueIsValid";
import { editUserPassword } from "../../API/users";
import toast from "react-hot-toast";
import LoadingSpinner from "../UI/LoadingSpinner";
import "./UserCard.scss";

export default function UserPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);

  // style of error message
  const errorMsgStyle = {
    color: "red",
    fontSize: ".8rem",
    marginBottom: ".5rem",
  };

  // submit handler
  async function handleEditUserPasswordSubmit(e) {
    e.preventDefault();
    if (!inputValueIsValid(newPassword)) {
      setErrorMsg(true);
      toast.error("Password value is not correct.");
      return;
    }

    try {
      setIsLoading(true);
      const editedPassword = {
        password: newPassword,
      };
      await editUserPassword(editedPassword);
      setIsLoading(false);
      setNewPassword("");
      toast.success("Successfully edited password!");
    } catch (error) {
      toast.error("Error occured!");
      setIsLoading(false);
    } finally {
      setErrorMsg(false)
    }
  }

  return (
    <>
      {!isLoading ? (
        <form
          className="user-card-update-form"
          onSubmit={handleEditUserPasswordSubmit}
        >
          <label htmlFor="password">Password</label>
          {errorMsg && (
            <p style={errorMsgStyle}>
              Please type new password. Empty password field is not acceptable!
            </p>
          )}
          <input
            type="password"
            placeholder="********"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <button className="user-card-update-btn" type="submit">
            Save
          </button>
        </form>
      ) : (
        <LoadingSpinner isLoading={isLoading.toString()} />
      )}
    </>
  );
}
