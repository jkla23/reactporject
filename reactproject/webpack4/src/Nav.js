import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav as MyNav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
export default class Nav extends Component{
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render(){
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">小二家店铺</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <MyNav className="ml-auto" navbar>
             
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                <NavLink to='/' activeClassName='active' exact>home</NavLink>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                  <NavLink to='/user' activeClassName='active' exact>商品详情</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                  <NavLink to='/test' activeClassName='active' exact>购物车</NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </MyNav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}