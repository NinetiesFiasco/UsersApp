import React, { Component } from 'react';
import LoginForm from './LoginForm';
import {connect} from 'react-redux';
import {login} from '../../../redux/auth';
import { Redirect } from 'react-router-dom';

class LoginFormContainer extends Component {
  render() {
    if (this.props.isAuth)
      return <Redirect to="/"/>

    return (<LoginForm {...this.props} />);
  }
}

let mstp = (state) =>{
  return {
    isAuth: state.auth.isAuth,
    error: state.auth.error
  }
}
export default connect(mstp,{login})(LoginFormContainer);