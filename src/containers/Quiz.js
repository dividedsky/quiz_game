import React from 'react';
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

  toggleEdit = () => {
    this.setState(prevState => {
      return {
        showModal: !prevState.showModal,
      };
    });
  };

  handleEdit = e => {
    e.preventDefault();
    const title = e.target.title.value;
    const topic = e.target.topic.value;
    this.props.editQuiz(this.props.quiz.id, title, topic);
    this.props.getQuiz(this.props.match.params.id);
    this.props.history.push(`/quizzes`);
  };

  render() {
    if (this.props.quiz && this.props.questions) {
      return (
        <Quiz
          quiz={this.props.quiz}
          questions={this.props.questions}
          deleteQuiz={this.handleDelete}
          isUserQuiz={this.props.quiz.author.id === this.props.userId}
          toggleEdit={this.toggleEdit}
          showModal={this.state.showModal}
          editQuiz={this.handleEdit}
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
