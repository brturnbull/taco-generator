import React from 'react';
import axios from 'axios';

class RandomTaco extends React.Component {

  state = {

  }


  handleGenerate = () => {
    console.log('working!');
    axios
      .get('https://cors-anywhere.herokuapp.com/https://taco-randomizer.herokuapp.com/random?full-taco=true')
      .then(res => console.log(res.data));
  }



  render() {
    return(
      <div>
        <h3>Random Taco</h3>
        <button onClick={this.handleGenerate}>Generate!</button>
      </div>
    );
  }
}

export default RandomTaco;
