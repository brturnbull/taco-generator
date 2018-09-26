import React from 'react';
import axios from 'axios';
// converting the JSON recipe response from markdown to JSX for rendering
import Markdown from 'markdown-to-jsx';

let counter = 0;

class RandomTaco extends React.Component {

  state = {
    data: {
      recipe: ''
    },
    condiment: '',
    mixin: '',
    seasoning: '',
    base_layer: '',
    shell: ''
  }


  handleGenerate = () => {
    counter ++ ;

    if (counter > 0 ) {
      document.getElementById('generate').innerHTML = 'Try again!';
    }

    axios
      .get('https://cors-anywhere.herokuapp.com/https://taco-randomizer.herokuapp.com/random?full-taco=true')
      .then(res => this.setState({
        data: {
          recipe: res.data.recipe
        },
        condiment: res.data.condiment,
        mixin: res.data.mixin,
        seasoning: res.data.seasoning,
        base_layer: res.data.base_layer,
        shell: res.data.shell
      }
      ))
      .then(console.log(this.state));
  }

  handleSave = (e) => {
    console.log('saved!');
    e.preventDefault();

    axios
      .post('/api/tacos', this.state )
      .then(() => this.props.history.push('/saved'))
      .catch(err => this.setState({ errors: err.response.data.errors }));
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
