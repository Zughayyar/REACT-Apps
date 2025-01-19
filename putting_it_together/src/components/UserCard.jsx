import "./UserCard.css"
import {useState} from "react";

const UserCard = props => {
    const {firstName, lastName, age, hairColor} = props
    const [ageState, setAgeState] = useState(age)
    const ageHandler = () => {
        setAgeState(ageState + 1)
        console.log(ageState)
    }
    return (
        <div className="UserCard">
            <h2>{lastName}, {firstName}</h2>
            <p>Age: {ageState}</p>
            <p>Hair Color: {hairColor}</p>
            <br/>
            <button onClick={ageHandler}>Birthday Button for {firstName} {lastName}</button>
        </div>
    )
}

export default UserCard