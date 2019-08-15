import React, {Component} from 'react';

//stateless functional Component
const NavBar = ({totalCounters}) => {
    return(
        <nav className="navbar navbar-light bg-light">
<a className="navbar-brand" href="#">Navbar <span className=" badge badge-pill badge-secundary">{totalCounters}</span></a>
</nav>
    );

};
// class NavBar extends Component {
//     state = {}
//     render(){
    
//     }
// }


export default NavBar;