import {authAPI} from '../api/api';

// *** *** *** ТИПЫ ДЕЙСТВИЙ *** *** ***
const SET_AUTH = "SET_AUTH";
// *** *** *** ***  ***  *** *** *** ***

// *** *** НАЧАЛЬНОЕ СОСТОЯНИЕ *** ***
let initialState = {
  isAuth: false
};
// *** *** *** *** *** *** *** *** ***

// *** *** *** *** РЕДЮСЕР *** *** *** ***
const reducer = (state = initialState, action) => {
  switch (action.type){
    case SET_AUTH:
      return {
        ...state,
        isAuth: action.auth
      }
    default: return state;
  }
}
// *** *** *** *** *** *** *** *** *** ***

// *** *** *** ЭТО ДИСПАТЧИЛКИ *** *** *** (устанавливают значения в сторе)
const setAuth = (auth) => ({type: SET_AUTH, auth});
// *** *** *** *** *** *** *** *** *** ***

// *** *** *** САНОЧКИ *** *** ***
export const login = (login,password) => {
  return (dispatch) => {
    authAPI.login(login,password).then((response)=>{
      if (response.data.success===1)
        dispatch(setAuth(true));
    });
  }
}
export const logout = () => {
  return (dispatch) => {
    authAPI.logout().then(()=>{
      dispatch(setAuth(false))
    });
  }
}
export const getMyAuth = () => {
  return (dispatch) => {
    authAPI.getMyAuth().then((response)=>{
      dispatch(setAuth(response.data.success===1));
    })
  }
}
// *** *** *** *** *** *** *** ***

export default reducer;