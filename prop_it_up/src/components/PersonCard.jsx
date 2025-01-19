import React from "react";
import './PersonCard.css';

const PersonCard = (props) => {
    const {firstName, lastName, age, hairColor} = props;
    return (
        <div className="person-card">
            <h2>{lastName}, {firstName}</h2>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
            <button>Birthday Button {firstName} {lastName}</button>
        </div>
    )
}

export default PersonCard