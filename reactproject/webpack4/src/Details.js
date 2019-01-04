import React,{Component} from 'react';
import {connect} from 'react-redux';
import {cartlist} from './actions/details';
import {Link} from 'react-router-dom';
import {getcarts} from './actions/carts';
const mapStateToProps=(state)=>{
  return {
     details:state.detai.details
  }
}

class detail extends Component{
    show(){
      var str=this.props.match.params.id;
        
        this.props.cartlist({id:str})
    }
    componentWillMount(){
      this.show()
    }
    Mount(){
     const {details}=this.props;
     return details
    }
    addcart(product){
      this.props.getcarts(product);
  }
    render(){
      return (
        <div style={{textAlign:'center'}}>
          {/* {JSON.stringify(this.show())} */}
          <h4 style={{textAlign:'center',marginTop:'30px'}}>{this.Mount().name}</h4>
          <img src={this.Mount().img}/>
          <p style={{lineHeight:'30px'}}>商品价格：{this.Mount().number}元</p>
          <Link to="/test" onClick={()=>this.addcart(this.Mount())}>点击加入并查看购物车</Link>
        </div>
      )
    }
  }
const CounterCon=connect(mapStateToProps,{cartlist,getcarts})(detail)
export default CounterCon;