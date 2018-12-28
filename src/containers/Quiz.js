import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Quiz from '../components/Quiz/Quiz';
import {getQuiz, getQuestions, deleteQuiz, editQuiz} from '../store/actions';

class QuizContainer extends React.Component {
  state = {
    showModal: false,
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getQuiz(id);
    this.props.getQuestions(id);
  }

  handleDelete = () => {
    this.props.deleteQuiz(this.props.quiz.id);
  };

  handleEdit = () => {
    this.setState(prevState => {
      return {
        showModal: !prevState.showModal,
      };
    });
  };

  render() {
    if (this.props.quiz && this.props.questions) {
      //console.log(this.props.quiz);
      //console.log(this.props.quiz.author.id, this.props.userId);

      return (
        <Quiz
          quiz={this.props.quiz}
          questions={this.props.questions}
          deleteQuiz={this.handleDelete}
          isUserQuiz={this.props.quiz.author.id === this.props.userId}
          editQuiz={this.handleEdit}
          showModal={this.state.showModal}
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
  {getQuiz, getQuestions, deleteQuiz, editQuiz},
)(QuizContainer);
