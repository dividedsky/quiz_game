import React, {Component} from 'react';
import './App.css';
import {Route} from 'react-router-dom';
//import Authenticate from './Authenticate';
import NavBar from './components/NavBar/NavBar';
import UserDashboard from './components/UserDashboard';
import LandingPage from './components/LandingPage/LandingPage';
import Quizzes from './components/Quizzes';
import {connect} from 'react-redux';

//{this.props.isLoggedIn ? <UserDashboard /> : <LandingPage />}
class App extends Component {
  // why can't i just put isLoggedIn here and skip authenticate?
  render() {
    return (
      <div className="App">
        <Route path="/" component={NavBar} />
        <Route exact path="/" component={LandingPage} />
        <Route path="/quizzes" render={props => <Quizzes {...props} />} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.user.isLoggedIn,
});

export default connect(mapStateToProps)(App);
