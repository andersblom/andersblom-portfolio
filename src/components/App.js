import React, { Component } from 'react';
import './App.css';

// TODO: Remember the stuff from the Trello-board: https://trello.com/b/mOkrYWCY/portfolio-resume

export default class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.children}
      </div>
    );
  }
}