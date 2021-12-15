import "../css/SecretSanta.css";
import React, { useState } from "react";

export const SecretSanta = () => {
  const [names, setNames] = useState([]);
  const [emails, setEmails] = useState([]);
  const [currentEmail, setCurrentEmail] = useState("");
  const [currentName, setCurrentName] = useState("");

  const addParticipant = () => {
    setNames([...names, currentName]);
    setEmails([...emails, currentEmail]);
  };

  const onEmailInputChange = (event) => {
    setCurrentEmail(event.target.value);
  };

  const onNameChange = (event) => {
    setCurrentName(event.target.value);
  };

  const removeParticipant = (targetIndex) => {
    setNames((prev) => {
      return prev.filter((names, index) => index !== targetIndex);
    });
    setEmails((prev) => {
      return prev.filter((emails, index) => index !== targetIndex);
    });
  };

  return (
    <div class="container">
      <h1 id="titleName">Secret Santa</h1>
      <p class="description">
        Secret Santa is a game where a group of individuals anonymously exchange gifts to one another. To help with the
        process of drawing names, this generator will take a list of emails, shuffle them, and send your Secret Santa to
        your email.
      </p>
      <input type="text" class="nameInput" placeholder="Name" onChange={onNameChange} value={currentName}></input>
      <input
        type="email"
        class="emailInput"
        onChange={onEmailInputChange}
        value={currentEmail}
        placeholder="Email"
      ></input>
      <div class="buttonContainer">
        <button class="button" type="button" onClick={addParticipant}>
          Add Participant
        </button>
      </div>
      <ol class="nameList">
        {names.map((name, index) => (
          <li key={index} onClick={() => removeParticipant(index)}>
            {name}
          </li>
        ))}
      </ol>
      <ol class="emailList">
        {emails.map((email, index) => (
          <li key={index} onClick={() => removeParticipant(index)}>
            {email}
          </li>
        ))}
      </ol>
    </div>
  );
};
