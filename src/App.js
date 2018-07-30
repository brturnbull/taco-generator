import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <img src="https://media.giphy.com/media/3o6ZtkmiFtpBvii6uQ/giphy.gif" data-reactid=".0.0" alt="dancing-taco" />
        <br />
        <button className="button">Old Tacos</button>
        <button className="button">Random Taco</button>
      </div>
    );
  }
}

export default App;
