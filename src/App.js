import React, { Component } from 'react';
import GitReposContainer from './containers/GitReposContainer'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>gitrospective</h1>
        <GitReposContainer />
      </div>
    );
  }

}

export default App;
