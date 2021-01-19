import React, { useState, useEffect } from "react";
import { Container, Card, Form, Button, Row, Col} from "react-bootstrap";
import BookResults from "../components/BookResults";
import API from "../utils/API";

function Saved(){
const [savedBooks, setSavedBooks] = useState([]);

useEffect(() => {
    getSavedBooks()
}, [])

const getSavedBooks = () => {
    API.getBooks().then(res =>
        setBooks(res.data))
        .catch(err => console.log(err));
};

function deleteBook(id) {
    API.deleteBook(id)
        .then(res => getSavedBooks())
        .catch(err => console.log(err));
}
    return(
<Container fluid>
    <Card>
        <Card.Body>
            <h3>Book Search</h3>
            <Form>
                <Row>
                    <Col md={11}>
                    <Form.Control type="text" placeholder="Search" onChange={handleChange}  />
                    </Col>
                    <Col md={1}>
                    <Button variant="outline-success" onClick={handleSearch}>Search</Button>
                    </Col>
                </Row>
    </Form>
        </Card.Body>
    </Card>
    <Card>
        <Card.Body>
        <h3>Results</h3>
    <BookResults googleBooks={googleBooks}></BookResults>
    </Card.Body>
    </Card>
</Container>

    )
}

export default Saved;