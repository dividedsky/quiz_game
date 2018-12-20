import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Quiz from '../components/Quiz';
import {getQuiz, getQuestions} from '../store/actions';

class QuizContainer extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getQuiz(id);
    this.props.getQuestions(id);
  }

  render() {
    //const quiz = this.props.quizzes.find(
    //q => String(q.id) === this.props.match.params.id,
    //);
    console.log('render', this.props.quiz);
    console.log(this.props.questions);

    if (this.props.quiz) return <Quiz quiz={this.props.quiz} />;
    //return <Redirect to="/quizzes" />;
    return <h1>loading</h1>;
  }
}

const mapStateToProps = state => ({
  quizzes: state.quiz.quizzes,
  fetchingComplete: state.quiz.fetchingComplete,
  quiz: state.quiz.currentQuiz,
  questions: state.quiz.currentQuestions,
});

export default connect(
  mapStateToProps,
  {getQuiz, getQuestions},
)(QuizContainer);
