// 1) Import the React and ReactDOM libraries
import React, { createElement } from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";

// 2) Get a reference to the div with ID root
const rootElement = document.getElementById('root');

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(rootElement);

// 4) Create a component
/*
function App() {
    let message = "Bye there!";
    if(Math.random() > 0.5) {
        message = "Hello there!";
    }
    return <h1 className="wrapper" style={{backgroundColor:"grey"}}>{message}</h1>;
}
*/

// 5) Show the component on the screen
root.render(<App/>);
