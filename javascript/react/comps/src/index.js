import React from "react";
import "../src/index.css";
import ReactDOM from "react-dom/client";
import {App} from "./components/App/App";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
    <div>
        <App/>
    </div>
);
