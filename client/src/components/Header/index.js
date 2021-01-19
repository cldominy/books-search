import React from "react";
import {Jumbotron, Container} from "react-bootstrap";

function Header (){ 
    return (
        <Jumbotron fluid className="justify-content-md-center">
  <Container>
    <h1>(React) Google Books Search</h1>
    <p>
      Search for and Save Books of Interest
    </p>
  </Container>
</Jumbotron>
    )
}

export default Header;