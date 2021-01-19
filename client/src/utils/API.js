import axios from "axios";

export default {
    getGoogleBooks: (title) => {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + title)
    },
    getBooks: () => {
        return axios.get("/api/books")
    },
    saveBooks: (bookData) => {
        return axios.post("/api/books", bookData)
    },
    deleteBooks: (id) => {
        return axios.delete("/api/books/" + id)
    }
}