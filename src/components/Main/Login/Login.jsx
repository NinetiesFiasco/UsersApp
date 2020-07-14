import React, { Component } from 'react';

class Login extends Component {

  loginInp = React.createRef();
  passInp = React.createRef();

  enter = () => {
    this.props.login(
      this.loginInp.current.value,
      this.passInp.current.value
    );
  }

  render() {
    return (
      <div>
        <table>
          <thead><tr><th colSpan="2">Войти</th></tr></thead>
          <tbody>
            <tr><td>Логин</td><td><input ref={this.loginInp} /></td></tr>
            <tr><td>Пароль</td><td><input ref={this.passInp} type="password" /></td></tr>
          </tbody>
          <tfoot><tr><td colSpan="2"><button onClick={this.enter}>Войти</button></td></tr></tfoot>
        </table>
      </div>
    );
  }
}

export default Login;