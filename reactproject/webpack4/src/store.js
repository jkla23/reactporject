import {createStore,applyMiddleware,combineReducers} from 'redux';
import reducer from './duce/couter';
import login from './duce/login';
import carts from './duce/cart';
import thunk from 'redux-thunk';
const local = combineReducers({login,carts,reducer})
const store =createStore(local,applyMiddleware(thunk));
export default store;