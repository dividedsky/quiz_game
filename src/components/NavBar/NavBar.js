import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {filterQuizzes} from '../../store/actions';
import './NavBar.css';
import userIcon from '../../img/user_icon.svg';
import plusSign from '../../img/plus_sign.svg';

const NavBar = props => {
  console.log(props);

  return (
    <div className="main-nav">
      <div className="main-nav-left">
        <img
          className="create-icon clickable"
          src={plusSign}
          alt="Create a Quiz"
          onClick={() => props.history.push('/create')}
        />
      </div>
      <div className="main-nav-center">
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
            <select
              className="topic-select"
              onChange={e => props.filterQuizzes(e.target.value)}>
              <option value="None">Show All</option>
              {props.topics.map((topic, i) => (
                <option key={i} value={topic.name}>
                  {topic.name}
                </option>
              ))}
            </select>
          )}
      </div>
      <div className="main-nav-right">
        <img className="user-icon clickable" src={userIcon} alt="" />
      </div>
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
