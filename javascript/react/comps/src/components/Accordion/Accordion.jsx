import { useState } from "react";
import { GoChevronLeft, GoChevronDown } from "react-icons/go";

export function Accordion({items}) {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleClick = (index) => {
        /* The next value of state drepends on the current value of state */
        setExpandedIndex( (currentExpandedIndex) => {
            if (currentExpandedIndex === index)
                return null; 
            else {
                return index;
            }
        });
    }
    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex;
        const icon = <span>{isExpanded ? <GoChevronDown /> : <GoChevronLeft /> }</span>;
        return (
            <div key={item.id}>
                <div className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer" onClick={() => handleClick(index)}>
                    {item.label}
                    {icon}
                </div>
                {isExpanded && <div className="border-b p-5">{item.content}</div>}
            </div>
        );
    });
    return (
        <div className="border-x border-t rounded">
            {renderedItems} 
        </div>
    );
}

