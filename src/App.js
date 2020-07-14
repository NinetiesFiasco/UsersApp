import React from 'react';
import './App.css';
import Main from './components/Main/Main';
import Header from './components/Header/HeaderContainer';
import {Route} from 'react-router-dom';
import Registration from './components/Main/Registration/Registration';
import Users from './components/Main/Users/UsersContainer';
import Login from './components/Main/Login/LoginContainer';
import {connect} from 'react-redux';
import {getMyAuth} from '../src/redux/auth';

class App extends React.Component {

  componentDidMount = () => {
    this.props.getMyAuth();
  }

  render(){
    return (
      <div className="App">
        <header>
          <Header/>
        </header>
        <main>
          <Route path="/registration" component={Registration}/>
          <Route path="/users" component={Users}/>
          <Route path="/login" component={Login}/>
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
