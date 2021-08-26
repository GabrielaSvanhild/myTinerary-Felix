import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux';
import userActions from '../redux/actions/userActions'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,

} from 'reactstrap';

const Navbaar= (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
     <Navbar className="p-0 d-flex justify-content-between" color="light" light expand="md">    
        <NavbarBrand ><img className="logo" src="/assets/logo_mytinerary.png" alt="logo"/>
        </NavbarBrand>
        
        <div className="d-flex ">
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <NavLink className="mx-3 text-secondary" exact to="/">Home</NavLink>
                <NavLink className="me-3 text-secondary" to="/cities">Cities</NavLink>
                <Nav className="mr-auto " navbar>              
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                           {props.token ? <img className="logo" src={props.src} alt="logo"/> : <img className="logo" src="/assets/logo-usuario.png" alt="logo"/> } 
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                {props.token && <h6> Welcome {props.firstName}!</h6>}
                                {!props.token && <Link to="/sign_up"><p>Sign up</p></Link>}
                            </DropdownItem>
                            <DropdownItem>
                               {!props.token && <Link to="/sign_in"><p>Sign in</p></Link>}

                            </DropdownItem>
                            <DropdownItem>
                                {props.token && <p onClick={() => props.logOut()}>Log out</p>}
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
            </Collapse>
        </div>
    </Navbar>           
);
}
const mapStateToProps = (state) => {
    return {
       token: state.user.token,
       src: state.user.src,
       firstName: state.user.firstName
    }
 }
const mapDispatchToProps={
    logOut: userActions.logOut,
}
export default connect(mapStateToProps,mapDispatchToProps)(Navbaar)
