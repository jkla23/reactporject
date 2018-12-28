import React,{Component} from 'react';
export default class Content extends Component{
  render(){
      const location=this.props.location;
      const params=this.props.params;
    return (
      <div>
        Content
        <br/>
        params:{JSON.stringify(params)}
        <br/>
        location:{JSON.stringify(location)}
      </div>
    )
  }
}