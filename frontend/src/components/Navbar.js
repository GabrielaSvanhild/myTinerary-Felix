import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Navbaar= (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="p-0" color="light" light expand="md">
        <NavbarBrand ><img className="logo" src="/assets/logo_mytinerary.png"/></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
              <img className="logo" src="/assets/logo_mytinerary.png"/>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
             </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <div>
          <NavLink className="mx-3" to="/">Home</NavLink>
          <NavLink to="/cities">Cities</NavLink>
          <NavbarText className="mx-3">Simple Text</NavbarText>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navbaar;