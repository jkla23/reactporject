import React,{Component} from 'react';
import {connect} from 'react-redux';
import {add,fetchlist} from './actions/actions';
import {islogin,delogin} from './actions/login';
const mapStateToProps=(state)=>{
  return {
      counter:state.reducer.counter,
      list:state.reducer.list,
      login:state.login.login
  }
}
class User extends Component{
    sdf(){
      console.log(123)
    };
  render(){
    return (
      <div>
           counter : {this.props.counter}
           {this.props.list.length>0 ? this.props.list.map(function(iteam,index){
             return <li key={index}>{iteam.name}
            
             <img src={iteam.img}/>
             </li>
           }) : null}
           <button onClick={this.props.add}>++</button>
           <button onClick={this.props.fetchlist}>ajax</button>
           <button onClick={this.props.islogin}>ture</button>
           <button onClick={this.sdf}>tue</button>
      </div>
    )
  }
}
const CounterCon=connect(mapStateToProps,{add,fetchlist,islogin,delogin})(User)
export default CounterCon;