import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";


const Details = () => {
    const {resource, id} = useParams();
    const [data, setData] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`https://swapi.dev/api/${resource}/${id}`)
            .then(res => {
                setData(res.data);
            })
            .catch(err => {
                console.log(err);
                navigate("/");
            })
    })
    return (
        <div>
            <h1>Details about {resource}:</h1>
            {data.name && <h2>{data.name}</h2>}
            <ul>
                {Object.entries(data).map(([key, value]) => (
                    <li key={key}>
                        <strong>{key}:</strong> {typeof value === "object" ? JSON.stringify(value) : value}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Details;