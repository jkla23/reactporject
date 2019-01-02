import {createStore,applyMiddleware,combineReducers} from 'redux';
import reducer from './duce/couter';
import login from './duce/login';
import thunk from 'redux-thunk';
const local = combineReducers({login,reducer})
const store =createStore(local,applyMiddleware(thunk));
export default store;