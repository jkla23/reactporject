import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav as MyNav, NavItem} from 'reactstrap';
export default class Nav extends Component{
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render(){
    return (
      <div>
         <link rel="stylesheet" href="https://cdn.bootcss.com/twitter-bootstrap/4.2.1/css/bootstrap.min.css"></link>
          <Navbar color="faded" light>
          <NavbarBrand className="mr-auto"> <NavLink to='/'>小二家店铺</NavLink></NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <MyNav navbar>
              <NavItem>
                <NavLink to="/user">商品页</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/test">购物车</NavLink>
              </NavItem>
            </MyNav>
          </Collapse>
        </Navbar>
      </div>
     
    )
  }
}