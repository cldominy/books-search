import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";

function BookResults({ 
    id,
    title,
    authors,
    description,
    thumbnail,
    link,
    onAction
 }){
    return (
<Card>
            <Card.Body>
  <Row>
        <Col md={10}><h4>{title}</h4>
        <h5>{authors}</h5></Col>
        <Col md={2}> <Button variant="primary" href={link}>View</Button> <Button variant="success" onClick>Save</Button> </Col>
  </Row>
  <Row>
      <Col md={2}>
          <img src={thumbnail} alt={{title} + " Thumbnail"}/>
      </Col>
      <Col md={10}>
          <p>{description}</p>
      </Col>
  </Row>
  </Card.Body>
</Card>
    )
}

export default BookResults;