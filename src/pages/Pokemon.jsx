import { useLoaderData } from "react-router-dom"
import getPokemon from '../utils/api.jsx'

export function loader() {
    return getPokemon();
}
    
export default function Pokemon() {
    const pokemon = useLoaderData();
    const pokemonElems = pokemon.map(pokemon => <li>{pokemon.name}, {pokemon.url}</li>)
    return (
        <>
            <h1>This is the Pokemon page</h1>
            <ul>{pokemonElems}</ul>
        </>
    )
}