import { useLoaderData, Link } from "react-router-dom"
import { getPokemon } from '../utils/api.jsx'

export  async function loader() {
    return await getPokemon();
}
    
export default function Pokemon() {
    const pokemon = useLoaderData();
    const pokemonElems = pokemon.results.map((poke, index) => <li key={poke.name}><Link to={poke.name}>{index + 1}. {poke.name}</Link></li>)
    function handleNext(){
        return;
    }
    function handlePrev(){
        return;
    }
    
    return (
        <div className="pokemon-div">
            <h1>Pokemon list</h1>
            <ul>{pokemonElems}</ul>
            <div className="pagination-div">
                {pokemon.previous && <button className="pagination-btn prev-btn" onClick={handlePrev}>&larr; Previous</button>}
                {pokemon.next && <button className="pagination-btn next-btn" onClick={handleNext}>Next &rarr;</button>}
            </div>
        </div>
    )
}