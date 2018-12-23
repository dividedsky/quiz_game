import React, { Component } from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import LandingPage from './components/LandingPage/LandingPage';
import Quizzes from './components/Quizzes/Quizzes';
import QuizContainer from './containers/Quiz';
import { connect } from 'react-redux';
import HomeContainer from './containers/Home';
import QuizForm from './components/QuizForm/QuizForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={NavBar} />
        <Route
          exact
          path="/"
          component={props =>
            this.props.isLoggedIn ? (
              <HomeContainer />
            ) : (
              <LandingPage {...props} />
            )
          }
        />
        <Route path="/quizzes" component={Quizzes} />
        <Route path="/quiz/:id" component={QuizContainer} />
        <Route path="/quiz/edit/:id" component={QuizForm} />
        <Route path="/create" component={QuizForm} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.user.isLoggedIn,
});

export default withRouter(
  connect(mapStateToProps)(App),
); /* withRouter is apparently not the most efficent solution to
blocked updates. need to read more on this and figure out a better way to get around the problem.
https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/blocked-updates.md
*/
