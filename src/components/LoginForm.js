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
    console.log(e);
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
      />
    );
  };

  render() {
    return (
      <form className="login-form" onSubmit={this.handleSubmit}>
        {this.makeInput('username', 'text')}
        {this.makeInput('password')}
        {this.makeInput('email')}
        {this.makeInput('imageUrl', 'text')}
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default LoginForm;
