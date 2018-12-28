import React,{Component} from 'react';
import {connect} from 'react-redux';
import {add,fetchlist} from './actions';
const mapStateToProps=(state)=>{
  return {
      counter:state.counter,
      list:state.list
  }
}
class User extends Component{
  render(){
    return (
      <div>
           counter : {this.props.counter}
           {this.props.list.length>0 ? this.props.list.map(function(iteam,index){
             return <li key={index}>{iteam.name}
             {console.log(iteam.img)}
             <img src={iteam.img}/>
             </li>
           }) : null}
           <button onClick={this.props.add}>++</button>
           <button onClick={this.props.fetchlist}>ajax</button>
      </div>
    )
  }
}
const CounterCon=connect(mapStateToProps,{add,fetchlist})(User)
export default CounterCon;