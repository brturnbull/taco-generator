import React from 'react';
import axios from 'axios';
import Markdown from 'markdown-to-jsx';

class RandomTaco extends React.Component {

  state = {
    data: {
      recipe: ''}
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
        <p>{ console.log(this.state) }</p>
        <p><Markdown>{ (this.state.data.recipe) }</Markdown></p>
      </div>
    );
  }
}

export default RandomTaco;
