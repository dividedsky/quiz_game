import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Quiz from '../components/Quiz';
import {getQuizzes} from '../store/actions';

class QuizContainer extends React.Component {
  render() {
    const quiz = this.props.quizzes.find(
      q => String(q.id) === this.props.match.params.id,
    );
    console.log('render', quiz);

    if (quiz) return <Quiz quiz={quiz} />;
    return <Redirect to="/quizzes" />;
  }
}

const mapStateToProps = state => ({
  quizzes: state.quiz.quizzes,
  fetchingComplete: state.quiz.fetchingComplete,
});

export default connect(
  mapStateToProps,
  {getQuizzes},
)(QuizContainer);
