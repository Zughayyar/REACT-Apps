import axios from 'axios';
import {useState} from "react";

const PokemonAPI_AXIOS = () => {
    const [pokemonList, setPokemonList] = useState([])

    const fetchPokemon = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then(
                response => {
                    const pokemonNames = response.data.results.map((pokemon) => pokemon.name);
                    setPokemonList(pokemonNames);
                }
            )
        .catch(
            error => console.log(error)
        )
    }



    return (
        <div>
            <h1>Pokemon API AXIOS</h1>
            <button onClick={fetchPokemon}>Fetch Pokemon</button>
            <ul>
                {
                    pokemonList.map((pokemon) => (
                        // eslint-disable-next-line react/jsx-key
                        <li>{pokemon}</li>
                    ))
                }
            </ul>
        </div>
    )
}
export default PokemonAPI_AXIOS;