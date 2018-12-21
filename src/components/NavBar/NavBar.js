import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {filterQuizzes} from '../../store/actions';
import './NavBar.css';

const NavBar = props => {
  console.log(props);

  return (
    <div className="main-nav">
      <NavLink exact className="nav-link" to="/">
        Home
      </NavLink>
      <NavLink className="nav-link" to="/login">
        Log In
      </NavLink>
      <NavLink className="nav-link" to="/quizzes">
        Quizzes
      </NavLink>
      {props.location.pathname === '/quizzes' &&
        props.topics && (
          <select onChange={e => props.filterQuizzes(e.target.value)}>
            <option value="None">None</option>
            {props.topics.map(topic => (
              <option value={topic.name}>{topic.name}</option>
            ))}
          </select>
        )}
    </div>
  );
};

const mapStateToProps = state => ({
  topics: state.quiz.topics,
});

export default connect(
  mapStateToProps,
  {filterQuizzes},
)(NavBar);
