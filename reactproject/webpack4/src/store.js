import {createStore,applyMiddleware,combineReducers} from 'redux';
import reducer from './duce/couter';
import detai from './duce/details';
import login from './duce/login';
import carts from './duce/cart';
import thunk from 'redux-thunk';
const local = combineReducers({login,carts,reducer,detai})
const store =createStore(local,applyMiddleware(thunk));
export default store;