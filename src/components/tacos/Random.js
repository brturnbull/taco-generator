import React from 'react';
import axios from 'axios';

class RandomTaco extends React.Component {

  state = {
    data: {}
  }


  handleGenerate = () => {
    console.log('working!');
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
        <p>{this.state.data.name}</p>
      </div>
    );
  }
}

export default RandomTaco;
