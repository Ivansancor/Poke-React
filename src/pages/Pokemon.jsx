import { useState } from "react";
import { useLoaderData, Link } from "react-router-dom"
import { getPokemon } from '../utils/api.jsx'

let offset = 0;
export async function loader() {
    return await getPokemon(offset);
}

export default function Pokemon() {
    const [offsetState, setOffsetState] = useState(0);
    const pokemon = useLoaderData();
    const pokemonElems = pokemon.results.map((poke, index) => 
        <li key={poke.name}>
            <Link to={poke.name}>{offsetState + index + 1 < 1026 ? offsetState + index + 1 : offsetState + index + 8976 }. {poke.name}</Link>
        </li>
    )

    function handlePrev(){
       setOffsetState ((prevOffsetState)=> prevOffsetState - 100);
    }
    function handleNext(){
        setOffsetState ((prevOffsetState)=> prevOffsetState + 100);
    }
    
    
    return (
        <div className="pokemon-div">
            <h1>Pokemon list</h1>
            <ul>{pokemonElems}</ul>
            <div className="pagination-div">
                <button className="pagination-btn prev-btn" onClick={handlePrev}>&larr; Previous</button>
                <button className="pagination-btn next-btn" onClick={handleNext}>Next &rarr;</button>
            </div>
        </div>
    )
}