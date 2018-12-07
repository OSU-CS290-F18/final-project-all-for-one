import React, { Component } from 'react';
import './App.css';
import Award from 'react-feather/dist/icons/award';
import userx from 'react-feather/dist/icons/user-x';

import { EntryList } from './components/EntryList';

export const UserX = userx;
class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div id="banner">MS-REDUX</div>
        <div id="ld-head">Leaderboard</div>

          <div id="entrylist">
            <div id='header-container'><Award size={25} />   Top 10</div>
            <style>
              {
                `
                svg {
                  position: relative;
                  top: 3px;
                }
    #header-container {
      background: #464866;
      text-align: left;
      padding: 10px;
      margin-bottom: 10px;
      margin-top: 10px;
      border-radius: 25px;
    }
      #entrylist {
        width: 80%;
        padding-left: 15px;
        padding-right: 15px;
        padding-bottom: 15px;
        border: solid;
        border-width: 1px;
        border-radius: 25px;
      }
    `
              }
            </style>
            <EntryList />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
