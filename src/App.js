import './App.css';
import React, { useState } from 'react';

function App() {
  const [emails, setEmails] = useState(['mary@gmail.com', 'joseph@gmail.com']);
  const [currentEmail, setCurrentEmail] = useState('');
  // emails: ['mary@gmail.com', 'joseph@gmail.com'];
  // setEmails(['mary@gmail.com', 'joseph@gmail.com']);
  // const fakeEmailList2 = ['mary@gmail.com', 'joseph@xgmail.com'];
  const newEmail = 'example@gmail.com';
  // No: emails + newEmail -> cant add arrays with + sign
  // No: emails.push(newEmail) -> push returns number & react expects A NEW ARRAY

  const addEmail = () => setEmails([...emails, currentEmail]);
  const onEmailInputChange = (event) => {
    setCurrentEmail(event.target.value);
  };

  return (
    <div className="App">
      <h1 id="titleName">Secret Santa</h1>
      <input type="email" onChange={onEmailInputChange} value={currentEmail} placeholder="Email"></input>
      <button type="button" onClick={addEmail}>Add Email</button>
      <ul class="emailList">{emails.map((emailList)=> <li>{emailList}</li>)}</ul>
    </div>
  );
}

export default App;

var list = []; // 0x123345352
list.push('hi'); // 1
// list = ['hi']