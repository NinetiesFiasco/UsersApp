import React, { Component } from 'react';
import s from './Header.module.css'
import Login from './Login/LoginContainer';
import Menu from './Menu/MenuContainer';

class Header extends Component { 
  
  logout = () => {
    this.props.logout();
  }

  render() {
    return (
      <div className={s.header}>
        <Menu/>
        <Login />
      </div>
    );
  }
}

export default Header;