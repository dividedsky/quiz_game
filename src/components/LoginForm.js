import React from 'react';

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      email: '',
      imageUrl: '',
      register: true,
    };
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    if (this.state.username && this.state.password && this.state.email) {
      localStorage.setItem('username', JSON.stringify(this.state.username));
      localStorage.setItem('password', JSON.stringify(this.state.password));
      localStorage.setItem('email', JSON.stringify(this.state.email));
    }
    window.location.reload();
  };

  toggleRegister = () => {
    this.setState(prevState => {
      return {
        register: !prevState.register,
      };
    });
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
      <>
        <button className="btn" onClick={this.toggleRegister}>
          register
        </button>
        <form
          className="register-form"
          onSubmit={this.handleSubmit}
          autoComplete="off">
          <h3>Register to Play</h3>
          {this.makeInput('username', 'text')}
          {this.makeInput('password')}
          {this.makeInput('email')}
          {this.makeInput('imageUrl', 'text')}
          <button className="btn submit-btn" type="submit">
            Submit
          </button>
        </form>
      </>
    );
  }
}

export default LoginForm;
