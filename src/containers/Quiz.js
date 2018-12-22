import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Quiz from '../components/Quiz/Quiz';
import {getQuiz, getQuestions, deleteQuiz} from '../store/actions';

class QuizContainer extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getQuiz(id);
    this.props.getQuestions(id);
  }

  handleDelete = () => {
    //if (this.props.userId === quiz.author.id) {
    //console.log('match delete');
    //this.props.deleteQuiz(quiz.id);
    //} else console.log('no match!');
    this.props.deleteQuiz(this.props.quiz.id);
  };

  render() {
    if (this.props.quiz && this.props.questions) {
      console.log(this.props.quiz);
      console.log(this.props.quiz.author.id, this.props.userId);

      return (
        <Quiz
          quiz={this.props.quiz}
          questions={this.props.questions}
          deleteQuiz={this.handleDelete}
          isUserQuiz={this.props.quiz.author.id === this.props.userId}
        />
      );
    }
    return <h1>loading</h1>;
  }
}

const mapStateToProps = state => ({
  quizzes: state.quiz.quizzes,
  fetchingComplete: state.quiz.fetchingComplete,
  quiz: state.quiz.currentQuiz,
  questions: state.quiz.currentQuestions,
  userId: state.user.user.id,
});

export default connect(
  mapStateToProps,
  {getQuiz, getQuestions, deleteQuiz},
)(QuizContainer);
