import React from 'react';
import {connect} from 'react-redux';
import {getQuizzes} from '../../store/actions';
import './Quizzes.css';

class Quizzes extends React.Component {
  componentDidMount() {
    this.props.getQuizzes();
  }

  render() {
    if (!this.props.quizzes) {
      return <h3>loading</h3>;
    }
    return (
      <div className="quiz-list-wrapper">
        <h2>Quizzes</h2>
        <div className="quiz-list">
          {this.props.quizzes.map(quiz => (
            <div
              className="single-quiz"
              key={quiz.id}
              onClick={() => this.props.history.push(`/quiz/${quiz.id}`)}>
              <h3>{quiz.title}</h3>
              <p>{quiz.topic}</p>
              <p>{quiz.author}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  quizzes: state.quiz.quizzes,
});
export default connect(
  mapStateToProps,
  {getQuizzes},
)(Quizzes);
