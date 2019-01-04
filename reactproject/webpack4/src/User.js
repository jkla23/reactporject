import React,{Component} from 'react';
import {connect} from 'react-redux';
import {add,fetchlist} from './actions/actions';
import {getcarts} from './actions/carts';
import {NavLink,Link} from 'react-router-dom';
const mapStateToProps=(state)=>{
  return {
      counter:state.reducer.counter,
      list:state.reducer.list,
      login:state.login.login
  }
}
  class User extends Component{
  addcart(product,event){
      this.props.getcarts(product);
      var d=document.createElement('span')
      var top=event.pageY-10;
      var left=event.pageX+20;
      d.innerHTML="+1"
      document.getElementById("app").appendChild(d);
      console.log(top)
      d.style=`color:black;position:absolute;top:${top}px;left:${left}px;font-size:12px;text-weight:800`
      var s=2;
      var timer=setInterval(function(){
           d.style.top=top-s+'px';
           d.style.fontSize=12+s+'px'
           s++
      }, 15);
      setTimeout(function(){
        clearInterval(timer);
      document.getElementById("app").removeChild(d);
      },420)
  }
  show() {
    const {rows,total} =this.props.list;
    var good=[]
    if(rows!=undefined){
      for(let i=0;i<rows.length;i++){
        var str="/details/"+rows[i].id
        good.push(<li style={{textAlign:'center',listStyle:'none'}} className="col-md-4 col-xs-12" key={i}><h5 style={{textAlign:'center'}}>{rows[i].name}</h5>
                       <Link to={str}><img src={rows[i].img} /></Link>
                       <p>{rows[i].text}</p>
                       <button className="btn btn-info" onClick={()=>this.addcart(rows[i],event)}>加入购物车</button>
                   </li>)
      }
    }
    return good
  }
  showpage(){
    const {total} =this.props.list;
    var good=[];
    var totalpage=Math.ceil(total/12);
    for(let i=1;i<=totalpage;i++){
      good.push(<li className="pull-left"><a href="javascript:void(0)" onClick={()=>this.onchange(i)} key={i}>{i}</a></li>)
    }
    return good;
  }
  onchange(i){
    this.props.fetchlist({page:i,limit:12})
  }
  componentWillMount () {
    const {fetchlist} =this.props;
    fetchlist()
    }
  render(){
    const {login}=this.props;
    if(login==false){
      return (<div>还未登录暂无法获取数据
        <NavLink to='/'>点击返回首页</NavLink>
      </div>);
    }else{
     return(
      <div>
        <link href="https://cdn.bootcss.com/twitter-bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"></link>
           <div style={{overflow:'hidden'}}>
           {this.show()}
           </div>
           <nav aria-label="Page navigation" style={{textAlign:'center'}}>
             <ul className="pagination">
               {this.showpage()}
             </ul>
           </nav>
       </div>
     )
    } 
  }
}
const CounterCon=connect(mapStateToProps,{add,fetchlist,getcarts})(User)
export default CounterCon;