import React, { useState } from "react";
import {inputValueIsValid} from "../utils/inputValueIsValid";
import "./Contact.scss";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  function inputNameValueHandler(e) {
    setName(e.target.value);
  }

  function inputEmailValueHandler(e) {
    setEmail(e.target.value);
  }

  function inputMsgValueHandler(e) {
    setMsg(e.target.value);
  }

  function inputEmailIsValid(val) {
    return val.trim() !== "" && val.includes("@");
  }

  function handleContactSubmit(e) {
    e.preventDefault();
    if (
      !inputValueIsValid(name) &&
      !inputEmailIsValid(email) &&
      !inputValueIsValid(msg)
    ) {
      return;
    }
    const sendData = {
      name,
      email,
      msg,
      date: new Date(),
    };

    setName("");
    setEmail("");
    setMsg("");
  }
  return (
    <main className="contact-container">
      <header className="contact-header">
        <h2>Contact Me</h2>
      </header>
      <form className="contact-form" onSubmit={handleContactSubmit}>
        <label htmlFor="name">Name</label>
        {!inputValueIsValid && (
          <p className="contact-error">Name field must not be empty</p>
        )}
        <input
          type="text"
          className="contact-name"
          placeholder="name"
          value={name}
          onChange={inputNameValueHandler}
        />
        <br />
        <label htmlFor="email">Email</label>
        {!inputEmailIsValid && (
          <p className="contact-error">Email field must not be empty</p>
        )}
        <input
          type="email"
          className="contact-email"
          placeholder="email"
          value={email}
          onChange={inputEmailValueHandler}
        />
        <br />
        <label htmlFor="message">Message</label>
        {!inputValueIsValid && (
          <p className="contact-error">Text field must not be empty</p>
        )}
        <textarea
          className="contact-msg-area"
          name="message"
          id="message"
          cols="30"
          rows="10"
          value={msg}
          onChange={inputMsgValueHandler}
          placeholder="type your message here..."
        />
        <br />
        <button type="submit" className="contact-btn">
          Send
        </button>
      </form>
    </main>
  );
}
