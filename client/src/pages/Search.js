import React, { useState } from "react";
import { Container, Card, Form, Button, Row, Col} from "react-bootstrap";
import BookResults from "../components/BookResults";
import API from "../utils/API";

function Search(){
const [googleBooks, setGoogleBooks] = useState([]);
const [keyword, setKeyWord] = useState("");

const handleChange = event => {
    const{value} = event.target
    setKeyWord(value)
    console.log(value)
}

const handleSearch = event => {
    API.getGoogleBooks(keyword).then(response =>{
        setGoogleBooks(response.data.items)
    })
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
{googleBooks.length ? (
    <>
    {googleBooks.map((book) => {
        const volumeInfo = book.volumeInfo;
        const image = volumeInfo.imageLinks
            ? volumeInfo.imageLinks.thumbnail
            : "https://dummyimage.com/128x197/b5b5b5/ffffff&text=No+Image+Available";
        const authorNames = volumeInfo.authors
            ? volumeInfo.authors.join(", ") 
            : "No Authors Found";
        const descriptionBook = volumeInfo.description
        ? volumeInfo.description
        : "No description could be found for this book";
        return (
            <BookResults
            id={book.id}
            title={volumeInfo.title}
            authors={authorNames}
            description={descriptionBook}
            thumbnail={image}
            link={volumeInfo.infoLink}
            onAction={onSaveBook}
      ></BookResults>
        )
    })}
    </>
    ) : (
        <h4>No Results Yet!</h4>
    )}
    
    </Card.Body>
    </Card>
</Container>

    )
}

export default Search;