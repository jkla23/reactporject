import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
export default class Nav extends Component{
  render(){
    return (
      <div>
        <ul>
            <li><NavLink to='/' activeClassName='active' exact>home</NavLink></li>
            <li><NavLink to='/user' activeClassName='active' >user</NavLink></li>
            <li><NavLink to='/test' activeClassName='active' >test</NavLink></li>
        </ul>
      </div>
    )
  }
}