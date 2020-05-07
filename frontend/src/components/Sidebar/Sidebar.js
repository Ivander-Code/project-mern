/** Dependencies */
import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

/**CSS File */
import "./Sidebar.css";

/**Component */
const Sidebar = () => (
  <Navbar.Collapse id="sideBar" className="d-lg-block bg-light border">
    <Nav.Item className="pl-4 pt-4 pr-4">
      <Link
        to="/all_records"
        className="text-secondary text-decoration-none"
      >
        Show Users
      </Link>
      <hr></hr>
    </Nav.Item>
    <Nav.Item className="pl-4 pr-4">
      <Link
        to="/new_record"
        className="text-secondary text-decoration-none"
      >
        Create new User
      </Link>
      <hr></hr>
    </Nav.Item>
    <Nav.Item className="pb-4 pl-4 pr-4">
      <Link
        to="/update_record"
        className="text-secondary text-decoration-none"
      >
        Edit / Delete Users
      </Link>
    </Nav.Item>
  </Navbar.Collapse>
);
export default Sidebar;
