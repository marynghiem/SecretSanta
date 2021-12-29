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
      return prev.filter((name, index) => index !== targetIndex);
    });
    setEmails((prev) => {
      return prev.filter((email, index) => index !== targetIndex);
    });
  };

  return (
    <div class="container">
      <h1 id="titleName">Secret Santa</h1>
      <p class="description">
        Secret Santa is a game where a group of individuals anonymously exchange gifts to one another. To help with the
        process of drawing names, this generator will take a list of emails, shuffle them, and send the pairing to your
        email!
      </p>

      <div class="secretSantaParticipantForm">
        <h3>Participants</h3>
        <input type="text" class="nameInput" placeholder="Name" onChange={onNameChange} value={currentName}></input>
        <input
          type="email"
          class="emailInput"
          onChange={onEmailInputChange}
          value={currentEmail}
          placeholder="Email"
        ></input>
        <div class="buttonContainer">
          <button class="button" id="addButton" type="button" onClick={addParticipant}>
            Add Participant
          </button>
        </div>
      </div>

      <div class="participantsList">
        <ol class="namesList">
          {names.map((name, index) => (
            <li key={index} class="nameList">
              {name}
            </li>
          ))}
        </ol>
        <ol class="emailsList">
          {emails.map((email, index) => (
            <li key={index} class="emailList">
              {email}
              <button class="button" id="deleteButton" onClick={() => removeParticipant(index)}>
                Delete
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};
