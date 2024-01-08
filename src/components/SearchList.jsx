import { Link } from "react-router-dom"

export default function SearchList( {matchedPokemon}) {
    const matchedPokes = matchedPokemon.map(poke => <li key={poke}><Link to={`/pokemon/poke/${poke}`}>{poke}</Link></li>);

    return (
        <ul className="matched-list">
            {matchedPokemon.length === 0 ? <span>No such Pokemon found...</span> : matchedPokes}
        </ul>
    )
}