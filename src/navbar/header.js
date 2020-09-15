import React, { Component } from "react";
import { Nav, NavDropdown, Navbar } from "react-bootstrap";
import "./headerCss.css";

export default class Header extends Component {
  componentDidMount() {}
  render() {
    return (
      <Navbar
        sticky="top"
        collapseOnSelect
        expand="lg"
        variant="dark"
        className="nav"
      >
        <Navbar.Brand href="#home">JSW</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#bannerBkg">Home</Nav.Link>
            <Nav.Link href="#AboutMe">About</Nav.Link>
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
