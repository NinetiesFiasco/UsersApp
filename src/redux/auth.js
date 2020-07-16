import {authAPI} from '../api/api';

// *** *** *** ТИПЫ ДЕЙСТВИЙ *** *** ***
const SET_AUTH = "SET_AUTH";
const SET_AUTH_ERROR = "SET_AUTH_ERROR";
// *** *** *** ***  ***  *** *** *** ***

// *** *** НАЧАЛЬНОЕ СОСТОЯНИЕ *** ***
let initialState = {
  isAuth: false,
  error: ""
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
    case SET_AUTH_ERROR: 
      return {
        ...state,
        error: action.error
      }
    default: return state;
  }
}
// *** *** *** *** *** *** *** *** *** ***

// *** *** *** ГЕНЕРАТОРЫ СОБЫТИЙ *** *** *** (устанавливают значения в сторе)
const setAuth = (auth) => ({type: SET_AUTH, auth});
const setError = (error) => ({type: SET_AUTH_ERROR, error});
// *** *** *** *** *** *** *** *** *** *** ***

// *** *** *** САНОЧКИ *** *** ***
export const login = (login,password) => {
  return (dispatch) => {
    authAPI.login(login,password).then((response)=>{
      if (response.status===200){
        if (response.data.success===1){
          dispatch(setError(""));
          dispatch(setAuth(true));
        } else{
          dispatch(setError(response.data.message));
        }
      }
    }).catch(()=>{
      dispatch(setError("Проблемы в соединении с сервером"));
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