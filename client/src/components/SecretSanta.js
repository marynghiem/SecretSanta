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

  const isAddParticipantButtonDisabled = () => {
    if (currentName.trim() === "" || currentEmail.trim() === "") {
      return true;
    } else if (names.some((name) => name === currentName) || emails.some((email) => email === currentEmail)) {
      return true;
    } else {
      return false;
    }
  };

  function listToObject(namesArr, emailsArr) {
    // Create a list to contain the new objects
    var objects = [];
    // Loop through both lists at the same time to create new objects
    for (var i = 0; i < namesArr.length; i++) {
      // Push the new object into our list container
      let obj = { name: namesArr[i], email: emailsArr[i] };
      objects.push(obj);
    }
    // Return the list
    return objects;
  }

  const sendEmails = () => {
    const listOfNamesAndEmails = listToObject(names, emails);
    fetch("/api", {
      method: "POST",
      body: JSON.stringify(listOfNamesAndEmails),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => alert(data.message));
  };

  return (
    <div className="container">
      <h1 id="titleName">Secret Santa</h1>
      <p className="description">
        Secret Santa is a game where a group of individuals anonymously exchange gifts to one another. To help with the
        process of drawing names, this generator will take a list of emails, shuffle them, and send the pairing to your
        email!
      </p>

      <div className="secretSantaParticipantForm">
        <h3>Participants Information</h3>
        <input
          type="text"
          className="nameInput"
          placeholder="Name"
          maxlength="20"
          onChange={onNameChange}
          value={currentName}
        ></input>
        <input
          type="email"
          className="emailInput"
          onChange={onEmailInputChange}
          value={currentEmail}
          placeholder="Email"
        ></input>
        <div className="buttonContainer">
          <button
            className="button"
            id="addButton"
            type="button"
            disabled={isAddParticipantButtonDisabled()}
            onClick={addParticipant}
          >
            Add Participant
          </button>
        </div>
      </div>

      <div className="participantsList">
        <h3>Participants List</h3>
        <ol className="namesList">
          {names.map((name, index) => (
            <li key={index} className="nameList">
              {name}
            </li>
          ))}
        </ol>
        <ol className="emailsList">
          {emails.map((email, index) => (
            <li key={index} className="emailList">
              <span className="emailText">{email}</span>
              <button className="button" id="deleteButton" onClick={() => removeParticipant(index)}>
                Delete
              </button>
            </li>
          ))}
        </ol>
        <button className="button" id="PairUpButton" onClick={sendEmails}>
          Pair up!
        </button>
      </div>
    </div>
  );
};
