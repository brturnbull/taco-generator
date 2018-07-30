import React from 'react';
import {
  Link
} from 'react-router-dom';

import RandomTaco from '../../components/tacos/Random';

class Home extends React.Component {

  render() {
    return (
      <div className="App">
        <img src="https://media.giphy.com/media/3o6ZtkmiFtpBvii6uQ/giphy.gif" data-reactid=".0.0" alt="dancing-taco" />
        <br />
        <Link to="/saved" className="button">Old Tacos</Link>
        <Link to="/random" component={ RandomTaco } className="button">Random Taco</Link>
      </div>    );
  }

}

export default Home;
