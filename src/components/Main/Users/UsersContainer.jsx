import React, { Component } from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import Users from './Users';
import { withAuthRedirect } from '../../../hoc/WithAuthRedirect';
import {getUsers,deleteUser} from '../../../redux/users';

class UsersContainer extends Component {
  render() {
    return <Users {...this.props} />;
  }
}

let mstp = (state) => {
  return {
    isAuth: state.auth.isAuth,
    users: state.users.users
  }
}

export default compose(
  connect(mstp,
    {
      getUsers,
      deleteUser
    }),
  withAuthRedirect
)(UsersContainer);