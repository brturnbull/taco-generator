import React from 'react';
import axios from 'axios';

const showdown = require('showdown');
const converter = new showdown.Converter();

class RandomTaco extends React.Component {

  state = {
    data: {
      name: '',
      recipe: ''
    }
  }


  handleGenerate = () => {
    axios
      .get('https://cors-anywhere.herokuapp.com/https://taco-randomizer.herokuapp.com/random?full-taco=true')
      .then(res => this.setState({ data: res.data}));
  }

  render() {
    return(
      <div>
        <h3>Random Taco</h3>
        <button onClick={this.handleGenerate}>Generate!</button>
        <hr />
        <h2>{ this.state.data.name }</h2>
        <p>{ console.log(this.state) }</p>
        <p>{ converter.makeHtml(this.state.data.recipe) }</p>
      </div>
    );
  }
}

export default RandomTaco;
