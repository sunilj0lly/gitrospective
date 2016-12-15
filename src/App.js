import React, { Component } from 'react';
import GitCommits from './containers/GitCommits'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>gitrospective</h1>
        <GitCommits />
      </div>
    );
  }

}

export default App;
