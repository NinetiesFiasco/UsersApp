import React, { Component } from 'react';
import {connect} from 'react-redux';
import Menu from './Menu';

class MenuContainer extends Component { 
  render() {
    return <Menu {...this.props} />;
  }
}

let mstp = (state) =>{
  return {
    isAuth: state.auth.isAuth
  }
}

export default connect(mstp,{})(MenuContainer);