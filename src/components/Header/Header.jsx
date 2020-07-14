import React, { Component } from 'react';
import s from './Header.module.css'
import {NavLink} from 'react-router-dom';

class Header extends Component { 
  
  logout = () => {
    this.props.logout();
  }

  render() {
    return (
      <div className={s.header}>
        <div className={s.list}>
          <div>{ this.props.isAuth ? "Вы авторизованы" : "Не авторизованы" }</div>
          <div></div>
          <div><NavLink to="/">Главная</NavLink></div>
          {
            this.props.isAuth
            ? (<div>
                <NavLink to="/users">Пользователи</NavLink>
                <button onClick={this.logout}>Выйти</button>
              </div>) 
            : (<div>
                <NavLink to="/login">Логин</NavLink>
                <NavLink to="/registration">Регистрация</NavLink>
              </div>)
          }
        </div>
      </div>
    );
  }
}

export default Header;