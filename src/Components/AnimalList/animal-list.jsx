import React from "react";
import Animal from "../Animal/animal";
import './style.css'

const AnimalList = ({ animals }) => {

    console.log("from animal list", animals)

    return (
        <div className="animal-list">
            <Animal />
        </div>
    )
};

export default AnimalList;