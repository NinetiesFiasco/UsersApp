import React, { Component } from 'react';
import s from './Login.module.css'
import {NavLink} from 'react-router-dom';
import Button from '../../common/Button/Button';

class Login extends Component { 
  
  logout = () => {
    this.props.logout();
  }

  render() {
    return (
      <div className={s.login}>
        {this.props.isAuth &&
          <div className={s.unauth}>
            <NavLink to="/" onClick={this.logout}><Button txt="Выйти"/></NavLink>
          </div>
        }
        {!this.props.isAuth &&
          <div className={s.auth}>
            <NavLink to="/login" activeClassName={'moreSpecific'}><Button txt="Логин"/></NavLink>
            <NavLink to="/registration" activeClassName={'moreSpecific'}><Button txt="Регистрация"/></NavLink>
          </div>
        }
      </div>      
    )
  }
}

export default Login;