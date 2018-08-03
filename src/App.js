import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

// import './App.scss';
// import 'bulma/css/bulma.css';

import Home from './components/tacos/Home';
import RandomTaco from './components/tacos/Random';
import Index from './components/tacos/Index';


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/random" component={RandomTaco} />
          <Route exact path="/saved" component={Index} />
        </Switch>
      </Router>
    );
  }
}

export default App;
