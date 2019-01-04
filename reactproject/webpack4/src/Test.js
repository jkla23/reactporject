import React,{Component} from 'react';
import {connect} from 'react-redux';
import {addcart,delcart} from './actions/carts';
const mapStateToProps=(state)=>{
  return {
     cart:state.carts
  }
}

class User extends Component{
  constructor(props){
    super(props);
    this.state = {
        email: ""
    }
}
componentWillMount () {
   this.price()
  }
  price(){
    const {cart}=this.props;
    if(cart.length>0){
     var pric=0;
     for(let i=0;i<cart.length;i++){
       cart[i].index=i;
       pric +=parseInt(cart[i].quantity*cart[i].number);
     }
   }
   this.setState({
    email: pric
});
  }
  show(){
     const {cart}=this.props;
     var arr=[];
     if(cart.length>0){
      for(let i=0;i<cart.length;i++){
        cart[i].index=i;
        arr.push(<li style={{textAlign:'center',listStyle:'none',display:'block'}} className="col-md-4 col-xs-12" key={i}><h5 style={{textAlign:'center'}}>{cart[i].name}</h5>
                      <img src={cart[i].img} />
                       <p>{cart[i].text}</p> 
                          <p>商品单价为：{cart[i].number}元</p>
                       <button onClick={()=>{this.adcart(cart[i])}}>+</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你购买的商品数量为：<span className='change'>{cart[i].quantity}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                       <button onClick={()=>{this.decart(cart[i])}}>-</button>
                   </li>)
      }
    }
    return arr
  }
  adcart(product){
    this.props.addcart(product)
    var change=document.querySelectorAll('.change');
    change[product.index].innerHTML=product.quantity;
    this.price()
  }
  decart(product){
    this.props.delcart(product)
    var change=document.querySelectorAll('.change');
    change[product.index].innerHTML=product.quantity;
    this.price()
  }
  render(){
    return (
      <div>
        <link href="https://cdn.bootcss.com/twitter-bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"></link>
         <div style={{overflow:'hidden'}}>         
         {this.show()}
         </div>
         <h4 style={{textAlign:"center",paddingTop:'30px'}}>商品总价为：{this.state.email}元</h4>
         <div style={{width:'120px',height:'40px',background:'orange',color:'white',fontSize:'20px',borderRadius:'10%',textAlign:'center',lineHeight:'40px',margin:'20px 60% '}}>
            <p>点击付款</p>
         </div>
      </div>
    )
  }
}
const CounterCon=connect(mapStateToProps,{addcart,delcart})(User)
export default CounterCon;