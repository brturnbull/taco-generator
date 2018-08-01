import React from 'react';
import axios from 'axios';
// converting the JSON recipe response from markdown to JSX for rendering
import Markdown from 'markdown-to-jsx';

// var showdown  = require('showdown'),
//   converter = new showdown.Converter();

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
        {/* {console.log(converter.makeHtml(this.state.data.recipe))} */}
        <Markdown>{ (this.state.data.recipe) }</Markdown>
      </div>
    );
  }
}

export default RandomTaco;
