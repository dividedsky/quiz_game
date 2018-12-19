import React from 'react';
import {connect} from 'react-redux';
import {registerUser, logInUser} from '../store/actions';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      image_url: '',
      register: true,
    };
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  handleRegister = e => {
    console.log(e);
    e.preventDefault();
    const {username, password, email} = this.state;
    const user = {username, password, email};
    if (this.state.image_url) {
      user.image_url = this.state.image_url;
    }
    //console.log('user', user);

    if (this.state.username && this.state.password && this.state.email) {
      this.props.registerUser(user);
      //localStorage.setItem('username', JSON.stringify(this.state.username));
      //localStorage.setItem('password', JSON.stringify(this.state.password));
      //localStorage.setItem('email', JSON.stringify(this.state.email));
      //window.location.reload();
    }
  };

  handleSignIn = e => {
    e.preventDefault();
    if (this.state.email && this.state.password) {
      this.props.logInUser({
        email: this.state.email,
        password: this.state.password,
      });
      //localStorage.setItem('username', JSON.stringify(this.state.username));
      //localStorage.setItem('password', JSON.stringify(this.state.password));
      //window.location.reload();
      //this.props.history.push('/quizzes');
    }
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
    if (this.state.register) {
      return (
        <>
          <form
            className="register-form"
            onSubmit={this.handleRegister}
            autoComplete="off">
            <h3>{this.state.register ? 'Register' : 'Sign In'} to Play</h3>
            {this.makeInput('username', 'text')}
            {this.makeInput('password')}
            {this.makeInput('email')}
            {this.makeInput('imageUrl', 'text')}
            <button className="btn submit-btn" type="submit">
              Submit
            </button>
            <h3>or...</h3>
            <button className="btn" onClick={this.toggleRegister}>
              {this.state.register ? 'Sign In' : 'Sign Up'}
            </button>
          </form>
        </>
      );
    }
    return (
      <>
        <form
          className="register-form"
          onSubmit={this.handleSignIn}
          autoComplete="off">
          <h3>{this.state.register ? 'Register' : 'Sign In'} to Play</h3>
          {this.makeInput('email')}
          {this.makeInput('password')}
          <button className="btn submit-btn" type="submit">
            Submit
          </button>
          <h3>or...</h3>
          <button className="btn" onClick={this.toggleRegister}>
            {this.state.register ? 'Sign In' : 'Sign Up'}
          </button>
        </form>
      </>
    );
  }
}

export default connect(
  null,
  {registerUser, logInUser},
)(LoginForm);
