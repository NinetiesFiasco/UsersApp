import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class Registration extends Component {

  constructor(props){
    super(props);

    this.state = {
      redirect: false
    }
  }

  loginInp = React.createRef();
  emailInp = React.createRef();
  passInp = React.createRef();
  passRepeatInp = React.createRef();

  register = () => {
    let data = {
      login: this.loginInp.current.value,
      email: this.emailInp.current.value,
      passInp: this.passInp.current.value,
      passRepeatInp: this.passRepeatInp.current.value
    };
    
    axios.post('/registrate',data)
      .then((response)=>{
        if (response.data.success === 1){
          this.setState({redirect:true})
        }else{
          alert('err');
        }

      })
      .catch((data)=>{
        alert('negood');
      });
  }

  render() {
    if (this.state.redirect)
      return <Redirect to="/login"/>


    return (
      <div>
        <table>
          <thead>
            <tr>
              <th colSpan="2">Регистрация</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Логин</td>
              <td><input placeholder="Логин" ref={this.loginInp} /></td>
            </tr>
            <tr>
              <td>Email</td>
              <td><input placeholder="Email" ref={this.emailInp} /></td>
            </tr>
            <tr>
              <td>Пароль</td>
              <td><input type="password" placeholder="Пароль" ref={this.passInp} /></td>
            </tr>
            <tr>
              <td>Повторите пароль</td>
              <td><input type="password" placeholder="Пароль" ref={this.passRepeatInp}/></td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="2"><button onClick={this.register}>Зарегистрироваться</button></td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

export default Registration;