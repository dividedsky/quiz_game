import React from 'react';
import './QuizForm.css';
import {addQuiz, setEditModeOn, setEditModeOff} from '../../store/actions';
import {connect} from 'react-redux';

// add quiz just takes a title and a topic
class AddQuizForm extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      topic: '',
    };
  }

  componentDidMount() {
    console.log(this.props.location.pathname);
    if (this.props.location.pathname === '/create') {
      this.props.setEditModeOff();
    } else {
      this.props.setEditModeOn();
    }
    console.log(this.props.editMode);
  }

  clearState = () => {
    this.setState({title: '', topic: ''});
  };

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('submit');
    console.log(this.state);
    this.props.addQuiz(this.state);
    this.clearState();
    this.props.history.push(`/quizzes/${this.props.currentQuiz}`);
  };

  makeInput = (name, type = name) => {
    return (
      <input
        className="quiz-form-input"
        name={name}
        type={type}
        onChange={this.handleChange}
        value={this.state[name]}
        placeholder={name}
      />
    );
  };
  render() {
    if (this.props.editMode) {
      return (
        <div className="quiz-form">
          <h1>edit mode</h1>
        </div>
      );
    }
    return (
      <div className="quiz-form">
        <h2>Form component</h2>
        <form onSubmit={this.handleSubmit}>
          {this.makeInput('title', 'text')}
          {this.makeInput('topic', 'text')}
          <input type="submit" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  editMode: state.quiz.editMode,
  currentQuiz: state.quiz.currentQuiz,
});

export default connect(
  mapStateToProps,
  {addQuiz, setEditModeOn, setEditModeOff},
)(AddQuizForm);
