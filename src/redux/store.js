import {createStore,combineReducers,applyMiddleware, compose} from  'redux'; //
import thunkMiddleware from 'redux-thunk';
import users from './users';
import auth from './auth';

let reducers = combineReducers({
  users,
  auth
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunkMiddleware));

let store = createStore(reducers,enhancer);

window.store = store;

export default store;