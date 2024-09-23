import './SearchBar.css';
import { useState } from "react";

function SearchBar({parentCallback}) {
    const [term, setTerm] = useState("");
    const handleFormSubmit = (event) => {
        event.preventDefault();
        parentCallback(term);
    }

    const handleChange = (event) => {
        setTerm(event.target.value);
    };

    //input element in a form element causes the form element to trigger
    //a submit event on enter key in the input
    return (
        <div className="search-bar">
            <label>Enter Search Term</label>
            <form onSubmit={handleFormSubmit}>
                <input className="search-bar" name="term" value={term} onChange={handleChange} />
            </form>
        </div>
    );
}

export default SearchBar;
