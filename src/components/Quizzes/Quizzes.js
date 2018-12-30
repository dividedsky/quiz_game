import React from 'react';
import {connect} from 'react-redux';
import {getQuizzes, getTopics} from '../../store/actions';
import './Quizzes.css';

class Quizzes extends React.Component {
  componentDidMount() {
    this.props.getQuizzes();
    this.props.getTopics();
  }

  //cdu to check if editing is complete
  componentDidUpdate(prevProps) {
    if (this.props.isEditing !== prevProps.isEditing) {
      this.props.getQuizzes();
    }
  }

  render() {
    if (!this.props.quizzes) {
      return <h3>loading</h3>;
    }
    const quizzes = this.props.filterActive
      ? this.props.filteredQuizzes
      : this.props.quizzes;
    return (
      <div className="quiz-list-wrapper">
        <h2>Quizzes</h2>
        <div className="quiz-list">
          {quizzes.map(quiz => (
            <div
              className="single-quiz"
              key={quiz.id}
              onClick={() => this.props.history.push(`/quiz/${quiz.id}`)}>
              <h3 className="quiz-title">{quiz.title}</h3>
              <p className="quiz-topic">{quiz.topic}</p>
              <p className="quiz-author">{quiz.author}</p>
              <p className="quiz-description">{quiz.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  quizzes: state.quiz.quizzes,
  filteredQuizzes: state.quiz.filteredQuizzes,
  filterActive: state.quiz.filterActive,
  isEditing: state.quiz.isEditing,
});
export default connect(
  mapStateToProps,
  {getQuizzes, getTopics},
)(Quizzes);
