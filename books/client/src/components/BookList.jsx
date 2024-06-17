import BookShow from "./BookShow";
import { useContext } from "react";
import { BooksContext } from "../context/books";

function BookList({books, onDelete, onEdit}) {
    const num = useContext(BooksContext);

    const renderedBooks = books.map( (book) => {
        return <BookShow onDelete={onDelete} onEdit={onEdit} book={book} key={book.id}/>
    });
    return (
        <div className="book-list">{num}{renderedBooks}</div>
    );
}

export default BookList;
