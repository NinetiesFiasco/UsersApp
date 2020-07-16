import React from 'react';
import s from './App.module.css';
import Header from './components/Header/HeaderContainer';
import {Route} from 'react-router-dom';
import Main from './components/Pages/Main/Main';
import Users from './components/Pages/Users/UsersContainer';
import Registration from './components/Pages/Registration/Registration';
import LoginForm from './components/Pages/LoginForm/LoginFormContainer';
import {connect} from 'react-redux';
import {getMyAuth} from '../src/redux/auth';

class App extends React.Component {

  componentDidMount = () => {
    this.props.getMyAuth();
  }

  render(){
    return (
      <div className={s.App}>
        <header>
          <Header/>
        </header>
        <main>
          <Route path="/registration" component={Registration}/>
          <Route path="/users" component={Users}/>
          <Route path="/login" component={LoginForm}/>
          <Route path="/" component={Main} exact/>
        </main>
      </div>
    );
  }
}

let mstp = (state) => {
  return {
    isAuth: state.auth.isAuth  
  }
};

export default connect(mstp,{getMyAuth})(App);
