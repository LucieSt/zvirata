import React from "react";
import Animal from "../Animal/animal";
import './style.css'

const AnimalList = ({ animals, onChoose }) => {

    const handleClick = (text) => {
        onChoose(text);
    };

    return (
        <div className="animal-list">
            {animals && animals.map((animal) => {
                return <Animal key={animal.id} nazev={animal.nazev} nazevLatinsky={animal.nazevLatinsky} foto={animal.foto} onClicking={handleClick}/>
            })}
        </div>
    )
};

export default AnimalList;