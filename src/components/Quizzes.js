import React from 'react';
import {connect} from 'react-redux';
import {getQuizzes} from '../store/actions';

class Quizzes extends React.Component {
  componentDidMount() {
    this.props.getQuizzes();
  }

  render() {
    if (!this.props.quizzes) {
      return <h3>loading</h3>;
    }
    return (
      <div className="quiz-list">
        <h2>Quizzes</h2>
        {this.props.quizzes.map(quiz => (
          <div className="single-quiz">
            <h3>{quiz.title}</h3>
          </div>
        ))}
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
