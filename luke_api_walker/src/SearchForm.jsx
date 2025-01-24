import {useNavigate} from "react-router-dom";
import {useState} from "react";

const SearchForm = () => {
    const [resource, setResource] = useState("character");
    const [id, setId] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (id.trim() === "") return;
        navigate(`/${resource}/${id}`);
    };

    return (
        <div>
            <form onSubmit={handleSearch}>
                <label>Search for:</label>
                <select onChange={e => setResource(e.target.value)} value={resource}>
                    <option value="people">people</option>
                    <option value="planets">planets</option>
                    <option value="starships">starships</option>
                    <option value="vehicles">vehicles</option>
                    <option value="films">films</option>
                    <option value="species">species</option>
                </select>
                <label>ID:</label>
                <input type="text" onChange={e => setId(e.target.value)} value={id} />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchForm