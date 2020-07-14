import React, { Component } from 'react';

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
        <td><button onClick={()=>{this.delete(u.user_id)}}>Delete</button></td>
      </tr>)

    return (
      <div>
        <table>
          <thead>
            <tr><th>Id</th><th>Login</th><th>Email</th><th>Delete</th></tr>
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