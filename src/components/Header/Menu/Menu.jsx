import React,{Component} from 'react';
import s from './Menu.module.css';
import { NavLink } from 'react-router-dom';
import Button from '../../common/Button/Button';

class Menu extends Component {
  render() {
    return (
      <div className={s.menu}>
          <div><NavLink activeClassName={'moreSpecific'} to="/" exact><Button txt="Главная"/></NavLink></div>
          { this.props.isAuth &&
            <NavLink activeClassName={'moreSpecific'} to="/users"><Button txt="Пользователи"/></NavLink>
          }
      </div>
    );
  }
}

export default Menu;