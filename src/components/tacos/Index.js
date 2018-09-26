import React from 'react';
import axios from 'axios';

class Index extends React.Component {

  state = {
    data: ''
  }

  componentDidMount() {
    axios.get('/api/tacos')
      .then(console.log('here'))
      .then(res => console.log(res.data));
  }

  render() {
    return(
      <h1>saved tacos</h1>


    );
  }
}

export default Index;
