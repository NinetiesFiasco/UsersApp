import {createStore,combineReducers,applyMiddleware} from  'redux'; //
import thunkMiddleware from 'redux-thunk';
import users from './users';
import auth from './auth';

let reducers = combineReducers({
  users,
  auth
});

let store = createStore(reducers,applyMiddleware(thunkMiddleware));

window.store = store;

export default store;