import { Link } from "react-router-dom"

export default function SearchList( {matchedPokemon, targetValue}) {
    const matchedPokes = matchedPokemon.map(poke => <li key={poke}><Link to={`/pokemon/poke/${poke}`}>{poke}</Link></li>);

    return (
        <ul className="matched-list">
            {matchedPokemon.length === 0 && targetValue !== "" ? <span>No such Pokemon found...</span> : matchedPokes}
        </ul>
    )
}