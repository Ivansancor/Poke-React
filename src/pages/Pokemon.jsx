import { useLoaderData, Outlet } from "react-router-dom"
import { getPokemon } from '../utils/api.jsx'

export  async function loader() {
    return await getPokemon();
}
    
export default function Pokemon() {
    const pokemon = useLoaderData();
    const pokemonElems = pokemon.map(pokemon => <li key={pokemon.name}>{pokemon.name}</li>)
    return (
        <>
            <h1>This is the Pokemon page</h1>
            <ul>{pokemonElems}</ul>
            <Outlet />
        </>
    )
}