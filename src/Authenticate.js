import React from 'react';
import LandingPage from './components/LandingPage/LandingPage';
import {connect} from 'react-redux';

const Authenticate = Component =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        loggedIn: false,
      };
    }
    componentDidMount() {
      console.log('cdm');
    }
    render() {
      console.log('authentiacting');
      return this.state.isLoggedIn ? <Component /> : <LandingPage />;
    }
  };

//const mapStateToProps = state => ({
//isLoggedIn: state.isLoggedIn,
//});

export default Authenticate;
