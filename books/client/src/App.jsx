import axios from "axios";
import { useState, useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

const createID = () => Math.round(Math.random() * 9999);

function App() {
    const [books, setBooks] = useState([]);
    
    const fetchBooks = async() => {
        const response = await axios({
            url: `http://localhost:3001/books`,
            method: "GET"
        })
        setBooks(response.data);
    }

    useEffect(() => {fetchBooks()}, []);

    const deleteBook = async (id) => {
        const response = await axios({
            url: `http://localhost:3001/books/${id}`,
            method: "DELETE"
        })
        const updatedBooks = books.filter( (book) => {
            return book.id !== id;
        });
        setBooks(updatedBooks);
    }

    const createBook = async (title) => {
        try {
            const response = await axios({
                url: "http://localhost:3001/books",
                method: "POST",
                data: {
                    title: title
                }
            });
            if(response.status < 300 && response.status > 199) {
                setBooks([ ...books, response.data ]);
            }
        } catch {
            console.log("oops! something went wrong");
        }
    };

    const editBook = async (id, title) => {
        const response = await axios({
            url: `http://localhost:3001/books/${id}`,
            method: "PUT",
            data: {
                title: title
            } 
        })

        const updatedBooks = books.map( (book) => {
            if(book.id === id) {
                return {...book, ...response.data};
            }
            return book;
        });
        setBooks(updatedBooks)
    };

    return <div className="app">
        <h1>Reading List</h1>
        <BookList books={books} onDelete={deleteBook} onEdit={editBook}/>
        <BookCreate onCreate={createBook} />
    </div>;
}

export default App;
