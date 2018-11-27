import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Entry } from './components/Entry/index.tsx';
let entryMock = {
entryPlace: 1,
entryTime: Date.now(),
entryScore: 6969696969,
entryUser: 'L33TH4X0R'
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Entry {...entryMock}/>
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
