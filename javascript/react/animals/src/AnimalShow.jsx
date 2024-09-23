import "./AnimalShow.css"
import { useState } from "react";
import bird from "./img/cat.svg";
import cat from "./img/cat.svg";
import cow from "./img/cow.svg";
import dog from "./img/dog.svg";
import gator from "./img/gator.svg";
import horse from "./img/horse.svg";
import heart from "./img/heart.svg";

const svgMap = {
    bird,
    cat,
    cow,
    dog,
    gator,
    horse
};

function AnimalShow({type}) {
    let [clicks, setClick] = useState(0);
    const handleClick = () => {
        setClick(clicks + 1);
    }
    return <div>
        <div className="animal-show" onClick={handleClick}>
            <img className="animal" src={svgMap[type]} alt="animal"/>
            <img className="heart" 
                src={heart} 
                alt="heart"
                style={
                    {
                        width: 1 * (1 + clicks) + 'vw',
                        height: 1 * (1 + clicks) + 'vh'
                    }
                }
            />
        </div>

    </div>;
}

export default AnimalShow;
