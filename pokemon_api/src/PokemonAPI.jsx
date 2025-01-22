import {useState} from "react";


const PokemonAPI = () => {
    const [pokemonList, setPokemonList] = useState([])
    const fetchPokemon = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then(
            response => {
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                return response.json();
            }
        )
        .then(
            data => {
                const pokemonNames = data.results.map((pokemon) => pokemon.name);
                setPokemonList(pokemonNames);
            }
        )
            .catch(
                error => {
                    console.error("Error fetching data: " + error);
                }
            )
    }


    return (
        <div>
            <h1>Pokemon API</h1>
            <button onClick={fetchPokemon}>Fetch Pokemon</button>
            <ul>
                {
                    pokemonList.map((pokemon) => (
                        <li key={pokemon.id}>{pokemon}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default PokemonAPI