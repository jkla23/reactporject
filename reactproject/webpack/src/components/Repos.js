import React,{Component} from 'react';
import NavLink from './NavLink'
import {hashHistory} from 'react-router'
export default class Repos extends Component{

  handerSubmit=(e)=>{
    e.preventDefault();
    var userName = this.refs.userName.value;
    var repoName = this.refs.repoName.value;
    var url      = `/repos/${userName}/${repoName}`;
    hashHistory.push(url);
  }

  render(){
    return (
      <div>
        Repos
        <ul>
          <li><NavLink to="/repos/reactjs/react-router">React</NavLink></li>
          <li><NavLink to="/repos/vuejs/vue-router">Vue</NavLink></li>
        </ul>
        <div>
          <form onSubmit={this.handerSubmit}>
            userName: <input ref="userName"/><br/>
            repoName: <input ref="repoName"/><br/>
            <input type="submit" value="提交"/>
          </form>
        </div>




        {this.props.children}
      </div>
    )
  }
}