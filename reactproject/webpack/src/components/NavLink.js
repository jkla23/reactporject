import React,{ Component } from 'react';
import { Link } from 'react-router';

const NavLink = (props)=>{
    return (
        <Link {...props} activeClassName="active"/>
    )
}
// class NavLink extends Component{
//     render(){
//         return (
//             <Link {...this.props} activeClassName="active"/>
//         )
//     }
// }



export default NavLink;