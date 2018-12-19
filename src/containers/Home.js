import React from 'react';
import Home from '../components/Home/Home';
import {connect} from 'react-redux';

class HomeContainer extends React.Component {
  render() {
    return <Home username={this.props.username} />;
  }
}

const mapStateToProps = state => ({
  username: state.user.user.username,
});

export default connect(mapStateToProps)(HomeContainer);
