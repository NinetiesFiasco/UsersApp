import React, { Component } from 'react';
import {connect} from 'react-redux';
import Login from './Login';
import {logout} from '../../../redux/auth';

class LoginContainer extends Component { 
  render() {
    return <Login {...this.props} />;
  }
}

let mstp = (state) =>{
  return {
    isAuth: state.auth.isAuth,
    error: state.auth.error
  }
}

export default connect(mstp,{logout})(LoginContainer);