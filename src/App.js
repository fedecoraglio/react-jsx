import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {

  const buttonText = { text: 'click me'};

  return (
    <div>
      <label class="label" for="name">Enter name</label>
      <input name="name" type="text"/>
      <button style={{backgroundColor: 'blue', color: 'white'}}>{buttonText.text}</button>
    </div>
    /**<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>**/
  );
}

export default App;
