import React from 'react';
import ReactDom from 'react-dom';
import Home from './Home';
import User from './User';
import Test from './Test';
import Nav from './Nav';
import details from './Details';
import store from './store';
import {Provider} from 'react-redux';
import {Route,HashRouter as Router,Switch} from 'react-router-dom'
ReactDom.render(
    <Provider store={store}>
        <Router>
            <div>
            <Nav/>
            <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/user" component={User}/>
            <Route path="/test" component={Test}/>
            <Route path="/details/:id" component={details}/>
            </Switch>
            </div>
        </Router>
    </Provider>,document.getElementById('app')) 