import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {islogin,delogin} from './actions/login';
import {connect} from 'react-redux';
import axios from 'axios';
import {Redirect} from 'react-router';
const mapStateToProps=(state)=>{
  return {
      counter:state.reducer.counter,
      list:state.reducer.list,
      login:state.login.login
  }
}
class Home extends React.Component {
  axio(){
     axios({
       url:'http://localhost:3000/user',
       method:'get'
     }).then(res=>{
       var email=document.getElementById('exampleEmail').value
       var password=document.getElementById('examplePassword').value
       if(email== res.data[0].email && password==res.data[0].password){
          this.props.islogin()
       }else{
          alert('您的账号或密码错误')
       }
     })
  }
  render() {
    // return (
    //   <div style={{width:'300px',margin:'40px auto'}}>
    //   <Form>
    //     <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
    //       <Label for="exampleEmail" className="mr-sm-2">Email</Label>
    //       <Input type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" />
    //     </FormGroup>
    //     <br/>
    //     <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
    //       <Label for="examplePassword" className="mr-sm-2">Password</Label>
    //       <Input type="password" name="password" id="examplePassword" placeholder="don't tell!" />
    //     </FormGroup>
    //     <br/>
    //     <Button onClick={()=>{this.axio()}}>Submit</Button>
    //   </Form>
    //   </div>
    // );{
    const {login}=this.props;
    if(login){
      return (<Redirect to="/user" />);
    }else{
     return(
      <div style={{width:'300px',margin:'40px auto'}}>
       <Form>
         <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
           <Label for="exampleEmail" className="mr-sm-2">Email</Label>
           <Input type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" />
         </FormGroup>
         <br/>
         <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="examplePassword" className="mr-sm-2">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="don't tell!" />
         </FormGroup>
         <br/>
         <Button onClick={()=>{this.axio()}}>Submit</Button>
       </Form>
       </div>
     )
    } 
  }
}
const CounterCon=connect(mapStateToProps,{islogin,delogin})(Home)
export default CounterCon;
