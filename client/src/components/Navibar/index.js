import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function Navibar(){
  return(
<Navbar collapseOnSelect sticky="top" expand="lg" bg="light" variant="light">
  <Navbar.Brand href="/">Google Books</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/search">Search</Nav.Link>
      <Nav.Link href="/saved">Saved</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  )
}

export default Navibar;

