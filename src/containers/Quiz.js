import React from 'react';
import {connect} from 'react-redux';
import Quiz from '../components/Quiz';
import {getQuizzes} from '../store/actions';

class QuizContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      quiz: null,
    };
  }

  componentDidMount() {
    if (!this.props.quizzes.length) {
      this.props.getQuizzes();
    }
  }
  componentDidUpdate = () => {
    if (this.props.quizzes.length && this.props.fetchingComplete) {
      const quiz = this.props.quizzes.find(
        q => String(q.id) === this.props.match.params.id,
      );
      this.setState({quiz: quiz});
    }
  };

  render() {
    console.log('render', this.state);

    if (this.state.quiz) return <Quiz quiz={this.state.quiz} />;
    return <h3>loading</h3>;
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
