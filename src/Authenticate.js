import React from 'react';
import LandingPage from './components/LandingPage/LandingPage';

const Authenticate = Component =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false,
      };
    }

    componentDidMount() {
      if (
        localStorage.getItem('username') &&
        localStorage.getItem('password')
      ) {
        this.setState({loggedIn: true});
      }
    }

    render() {
      return this.state.loggedIn ? <Component /> : <LandingPage />;
    }
  };

export default Authenticate;
