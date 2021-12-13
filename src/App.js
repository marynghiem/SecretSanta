import './App.css';
import React, { useState } from 'react';

function App() {
  const [emails, setEmails] = useState([]);
  const [currentEmail, setCurrentEmail] = useState('');
  

  const addEmail = () => setEmails([...emails, currentEmail]);
  const onEmailInputChange = (event) => {
    setCurrentEmail(event.target.value);
  };

  return (
    <div className="App">
      <div class="container">
      <h1 id="titleName">Secret Santa</h1>
      <p class="description">Secret Santa is a game where a group of individuals anonymously exchange gifts to one another.
         To help with the process of drawing names, this generator will take a list of emails, shuffle them, and send your Secret Santa to your email. </p>
      <input type="email"onChange={onEmailInputChange} value={currentEmail} placeholder="Email"></input>
      <button type="button" onClick={addEmail}>Add Email</button>
      <div class="unorderedListDiv">
      <ul class="emailList">{emails.map((emailList)=> <li>{emailList}</li>)}</ul></div>
      </div>
    </div>
  );
}

export default App;

