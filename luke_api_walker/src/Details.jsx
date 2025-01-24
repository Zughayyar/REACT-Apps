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
            <h1>The name of the {resource}: </h1>
            <h2>{data.name}</h2>
        </div>
    )
}

export default Details;