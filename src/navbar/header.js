import React, { Component } from "react";
import {Nav, NavDropdown, Navbar} from "react-bootstrap";
import "./headerCss.css";

export default class Header extends Component {
  componentDidMount() {}
  render() {
    return (      
      <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark" >
  <Navbar.Brand href="#home">JSW</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#bannerBkg">Home</Nav.Link>
      <Nav.Link href="#AboutMe">About</Nav.Link>
      {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Carrier Timeline</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Contact</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
    <Nav>
      <Nav.Link href="#WorkWithMe">Why me?</Nav.Link>
      <Nav.Link href="#Timeline">Carrier Timeline</Nav.Link>
      <Nav.Link href="#bannerBkg">Contact</Nav.Link>      
    </Nav>
  </Navbar.Collapse>
</Navbar>
    );
  }
}
