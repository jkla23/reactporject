import React,{Component} from 'react';
import Content from './Content';
import {Link,Route,Prompt} from 'react-router-dom';
export default class User extends Component{
  render(){
    return (
      <div>
        <Prompt message="你确定要离开吗？"/>
        <ul>
            <li><Link to={this.props.match.url+'/ab/user1'}>user1</Link></li>
            <li><Link to={this.props.match.url+'/user2'}>user2</Link></li>
            <li><Link to={this.props.match.url+'/ab/user3'}>user3</Link></li>
        </ul>
        <Route path={`${this.props.match.url}/ab/:user`} component={Content}/>
        
      </div>
    )
  }
}
