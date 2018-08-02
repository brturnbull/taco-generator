import React from 'react';
import axios from 'axios';
// converting the JSON recipe response from markdown to JSX for rendering
import Markdown from 'markdown-to-jsx';

let counter = 0;

class RandomTaco extends React.Component {

  state = {
    data: {
      recipe: ''}
  }


  handleGenerate = () => {
    counter ++ ;

    if (counter > 0 ) {
      document.getElementById('generate').innerHTML = 'Try again!';
    }

    axios
      .get('https://cors-anywhere.herokuapp.com/https://taco-randomizer.herokuapp.com/random?full-taco=true')
      .then(res => this.setState({ data: res.data}));
  }

  handleSave = () => {
    console.log('saved!');

    axios
      .post('/api/tacos', this.state, {
        headers: { 'Access-Control-Allow-Origin': '*'}
      })
      .then(() => this.props.history.push('/tacos'));
  }

  render() {
    return(
      <div>
        <h3>Random Taco</h3>
        <button id="generate" onClick={ this.handleGenerate }>Generate!</button>
        <hr />
        <Markdown>{ (this.state.data.recipe) }</Markdown>
        <button onClick={ this.handleSave }>Yum, save!</button>
      </div>
    );
  }
}

export default RandomTaco;
