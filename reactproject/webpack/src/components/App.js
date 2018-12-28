import React,{ Component } from 'react';
import NavLink from './NavLink'
import {IndexLink} from 'react-router'
export default class App extends Component{
    render(){
        return (
            <div>
                <h1>App</h1>
                <ul>
                   <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
                   {/* <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li> */}
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/repos">Repos</NavLink></li>
                </ul>

                {this.props.children}
            </div>
        )
    }
}

// nodejs的url组成