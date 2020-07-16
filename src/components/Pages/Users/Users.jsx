import React, { Component } from 'react';
import s from './Users.module.css';

class Users extends Component {

  componentDidMount() {
    this.props.getUsers();
  }
  delete = (id) => {
    this.props.deleteUser(id);
  }

  render() {
    let usersUI = null;
    if (this.props.users)
      usersUI = this.props.users.map((u,key) => <tr key={key}>
        <td>{u.user_id}</td>
        <td>{u.login}</td>
        <td>{u.email}</td>
        <td><button onClick={()=>{this.delete(u.user_id)}}>Удалить</button></td>
      </tr>)

    return (
      <div>
        <table className={s.tab}>
          <thead>
            <tr><th>Идентификатор</th><th>Логин</th><th>Email</th><th>Удалить</th></tr>
          </thead>
          <tbody>
            {usersUI}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Users;