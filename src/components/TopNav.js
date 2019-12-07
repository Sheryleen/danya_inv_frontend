import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const TopNav = props => {
  return (
    <div>
      <Navbar color='light' light expand='md'>
        <NavbarBrand href='/'>Danya Inventory</NavbarBrand>
      </Navbar>
    </div>
  );
};

export default TopNav;
