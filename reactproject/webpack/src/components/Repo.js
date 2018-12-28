import React,{Component} from 'react';
export default class Repo extends Component{
  render(){
    return (
      <div>
        Repo
        <br/>
        userName: {this.props.params.userName}
        <br/>
        repoName: {this.props.params.repoName}
      </div>
    )
  }
}