import './App.css';
import SearchBar from "./SearchBar";
import searchImages from "../api.js";
import { useState } from "react";
import ImageList from "./ImageList";

function App() {
    const [images, setImages] = useState([]);
    const handleSubmit = async (searchTerm) => {
        console.log("Do a search with", searchTerm);
        const response = await searchImages(searchTerm);
        setImages(response);
    }

    return (
        <div className="app">
            <SearchBar parentCallback={handleSubmit} />
            <ImageList images={images} />
        </div>
    );
}

export default App;
