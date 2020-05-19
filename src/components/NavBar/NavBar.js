/**Dependencies */
import React from "react";
import { Navbar } from "react-bootstrap";

/**Component */
const NavBar = () => (
  <Navbar className="bg-light border-bottom shadow-sm position-sticky sticky-top pt-1 pb-1 pl-4" expand="lg">
    <Navbar.Brand className="navbar-brand">
      <h4>Users App</h4>
    </Navbar.Brand>
    <Navbar.Toggle
      aria-controls="sideBar"
      data-toggle="collapse"
      data-target="#sideBar"
      aria-expanded="false"
    ></Navbar.Toggle>
  </Navbar>
);

export default NavBar;
