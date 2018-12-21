import React from 'react';
import './QuizForm.css';

// add quiz just takes a title and a topic
class QuizForm extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      topic: '',
    };
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  handleSubmit = () => {
    console.log('submit');
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
    return (
      <div className="quiz-form">
        <h2>Form component</h2>
        {this.makeInput('title', 'text')}
        {this.makeInput('topic', 'text')}
      </div>
    );
  }
}

export default QuizForm;
