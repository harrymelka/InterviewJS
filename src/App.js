import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Firebase from "./conf/firebase";

class App extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    // Init
  }

  fetchUsers() {
    // Get all the users from Users collection in firestore storage /!\
  }

  render() {
    return (
      <div className="App">
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
      </div>
    );
  }
}

export default App;
