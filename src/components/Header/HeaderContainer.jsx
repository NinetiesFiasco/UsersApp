import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from './Header';
import {logout} from '../../redux/auth';

class HeaderContainer extends Component { 
  render() {
    return <Header {...this.props} />;
  }
}

let mstp = (state) =>{
  return {
    isAuth: state.auth.isAuth
  }
}

export default connect(mstp,{logout})(HeaderContainer);