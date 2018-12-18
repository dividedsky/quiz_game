import React, {Component} from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Authenticate from './Authenticate';
import NavBar from './components/NavBar/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={NavBar} />
      </div>
    );
  }
}

export default Authenticate(App);
