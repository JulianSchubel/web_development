import { useState } from "react";
function BookEdit({book, onEdit}) {
    const [title, setTitle] = useState(book.title); 

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onEdit(book.id, title);
    };

    return (
        <form onSubmit={handleFormSubmit} className="book-edit">
            <label>Title</label>
            <input className="input" onChange={handleTitleChange} value={title}/>
            <button className="button is-primary">Save</button>
        </form>
    );
}

export default BookEdit;
