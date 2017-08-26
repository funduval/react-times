import React, { Component } from 'react';
import logo from './greyTimes.jpg';
import './App.css';
import Main from './Main.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">

          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="appTitle">React! Times</h1>
        </div>
            <div className="row">

{/*but give this child component access to a click function*/}

             <Main />


            </div>
          <p className="App-intro">
            
          </p>
      </div>
    );
  }
}

export default App;
