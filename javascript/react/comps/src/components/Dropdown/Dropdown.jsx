import { useState } from "react";

export function Dropdown({options, value, onChange}) {
    const [isOpen, setIsOpen] = useState(false);


    let renderedOptions = options?.map( (option) => {
        return (
            <div onClick={() => handleOptionClick(option)} key={option.value}>
                {option.label}
            </div>
        )
    })

    const handleOptionClick = (option) => {
        setIsOpen(false);
        onChange(option);
    }

    const toggleIsOpen = () => {
        /* Dependent on previous state; use functional state update */
        setIsOpen( (currentIsOpenState) => !currentIsOpenState);
    }
    
    return (
        <div>
            <div onClick={toggleIsOpen}>{value?.label || "Select..."}</div>
            {isOpen && <div>{renderedOptions}</div>}
        </div>
    );
}
