import React, { Component } from 'react';
import Login from './Login';
import {connect} from 'react-redux';
import {login} from '../../../redux/auth';
import { Redirect } from 'react-router-dom';

class LoginContainer extends Component {
  render() {
    if (this.props.isAuth)
      return <Redirect to="/"/>

    return (<Login {...this.props} />);
  }
}

let mstp = (state) =>{
  return {
    isAuth: state.auth.isAuth
  }
}
export default connect(mstp,{login})(LoginContainer);