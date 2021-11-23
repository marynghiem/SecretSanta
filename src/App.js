import './App.css';
import React, { useState } from 'react';

function App() {
  const [emails, setEmails] = useState([]);
  // emails: ['mary@gmail.com', 'joseph@gmail.com'];
  const fakeEmailList1 = 'jose@yahoo.com';
  const fakeEmailList2 = ['mary@gmail.com', 'joseph@gmail.com'];
  return (
    <div className="App">
      <input type="email" placeholder="Email"></input>
      <button type="button">Add Email</button>
      <p>{fakeEmailList1}</p>
    </div>
  );
}

export default App;
