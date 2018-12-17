import React, {Component} from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import LandingPage from './components/LandingPage/LandingPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={NavBar} />
        <Route exact path="/" component={LandingPage} />
      </div>
    );
  }
}

export default App;
