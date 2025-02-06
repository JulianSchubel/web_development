import { useState } from "react";
import { Dropdown } from "../Dropdown/Dropdown";
import { ButtonPage } from "../../pages/button_page";

export function App() {
    const [selected, setSelected] = useState("Select...");
    const options = [
        { label: "Red", value: "red" },
        { label: "Green", value: "green" },
        { label: "Blue", value: "blue" },
    ];

    const handleSelect = (option) => {
        setSelected(option);
    }

    return (
        <div>
            <ButtonPage />            
            <Dropdown options={options} selected={selected} handleSelect={handleSelect}/>
        </div>
    );
}
