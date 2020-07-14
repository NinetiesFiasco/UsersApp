import {usersAPI} from '../api/api';

// *** *** *** ТИПЫ ДЕЙСТВИЙ *** *** ***
const SET_USERS = "SET_USERS";
const DELETE_USER = "DELETE_USER";
// *** *** *** ***  ***  *** *** *** ***

// *** *** НАЧАЛЬНОЕ СОСТОЯНИЕ *** ***
let initialState = {
  users: []
};
// *** *** *** *** *** *** *** *** ***

// *** *** *** *** РЕДЮСЕР *** *** *** ***
const reducer = (state = initialState, action) => {
  switch (action.type){
    case SET_USERS:
      return {
        ...state,
        users: action.users
      }
    case DELETE_USER: {
      return {
        ...state,
        users: state.users.filter(elem => elem.user_id !== action.user_id)
      }
    }
    default: return state;
  }
}
// *** *** *** *** *** *** *** *** *** ***

// *** *** *** ЭТО ДИСПАТЧИЛКИ *** *** *** (устанавливают значения в сторе)
const setUsers = (users) => ({type: SET_USERS, users});
const deleteUserDispatch = (user_id) => ({type:DELETE_USER, user_id })
// *** *** *** *** *** *** *** *** *** ***

// *** *** *** САНОЧКИ *** *** ***
export const getUsers = () => {
  return (dispatch) => {
    usersAPI.getUsers().then((response)=>{
      dispatch(setUsers(response.data));
    });
  }
}
export const deleteUser = (id) => {
  return (dispatch) => {
    usersAPI.deleteUser(id).then(() =>{
      dispatch(deleteUserDispatch(id));
    })
  }
}
// *** *** *** *** *** *** *** ***

export default reducer;