import React,{Component} from 'react';
import Content from './Content';
import {Link,Route,Prompt} from 'react-router-dom';
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
    
  show() {
    const {rows,total} =this.props.list;
    var good=[]
    console.log(this.props)
    if(rows!=undefined){
      for(let i=0;i<rows.length;i++){
        good.push(<li key={i}><h5>{rows[i].name}</h5>
                      <img src={rows[i].img} />
                       <p>{rows[i].text}</p>
                   </li>)
      }
    }
    return good
  }
  showpage(){
    const {total} =this.props.list;
    var good=[];
    var totalpage=Math.ceil(total/5);
    for(let i=1;i<=totalpage;i++){
      good.push(<li><a href="javascript:void(0)" onClick={()=>this.onchange(i)} key={i}>{i}</a></li>)
    }
    return good;
  }
  onchange(i){
    this.props.fetchlist({page:i,limit:5})
  }
  componentWillMount () {
    const {counter,list,add,fetchlist,islogin} =this.props;
    fetchlist()
    }
  render(){
    const {counter,list,add,fetchlist,islogin} =this.props;
   
    return (
      <div>
          {this.show()}
          
          <nav aria-label="Page navigation">
            <ul className="pagination">
              {this.showpage()}
            </ul>
          </nav>
      </div>
    )
  }
}
const CounterCon=connect(mapStateToProps,{add,fetchlist,islogin,delogin})(User)
export default CounterCon;