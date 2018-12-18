import React from 'react';

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      email: '',
      imageUrl: '',
    };
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  makeInput = (name, type = name) => {
    return (
      <input
        className="login-input"
        type={type}
        name={name}
        value={this.state[name]}
        placeholder={name}
        onChange={this.handleChange}
        autoComplete="off"
      />
    );
  };

  render() {
    return (
      <form
        className="login-form"
        onSubmit={this.handleSubmit}
        autoComplete="off">
        {this.makeInput('username', 'text')}
        {this.makeInput('password')}
        {this.makeInput('email')}
        {this.makeInput('imageUrl', 'text')}
        <button className="btn submit-btn" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default LoginForm;
