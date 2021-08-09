import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
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
        <NavbarBrand ><img className="logo" src="/assets/logo_mytinerary.png"/>
        </NavbarBrand>
        <div className="d-flex ">
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <NavLink className="mx-3 text-secondary" to="/">Home</NavLink>
                <NavLink className="me-3 text-secondary" to="/cities">Cities</NavLink>
                <Nav className="mr-auto " navbar>              
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            <img className="logo" src="/assets/logo-usuario.png"/>
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                Sign in
                            </DropdownItem>
                            <DropdownItem>
                                Sign out
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
            </Collapse>
        </div>
    </Navbar>           
);
}

export default Navbaar;