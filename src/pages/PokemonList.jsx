import { useLoaderData, Link, useParams } from "react-router-dom"
import { getPokemon } from '../utils/api.jsx'

export async function loader(req) {
    return await getPokemon(req.params.page);
}

export default function Pokemon() {
    const pokemon = useLoaderData();
    const { page } = useParams();
    const pokemonElems = pokemon.results.map((poke, index) => 
        <li key={poke.name}>
            <Link to={`/pokemon/poke/${poke.name}`}>{index + 1 + ((page-1) * 100) < 1026 ? 
                index + 1 + ((page-1) * 100) :
                index + 8976 + ((page-1) * 100)}. {<span 
                    className={index + 1 + ((page-1) * 100) > 1025 ? "poke-special" : ""}>{poke.name}
                </span>}
            </Link>
        </li>
    )    
    
    return (
        <div className="pokemon-list-div">
            <h1>Pokemon list</h1>
            <ul className={pokemon.results.length < 25 ? "short-ul" : ""}>{pokemonElems}</ul>
            <div className="pagination-div">
                {page > 1 && <Link to={`/pokemon/${parseInt(page) - 1}`}>
                    <button className={`${pokemon.results.length < 25 ? "short-ul-btn" : ""} pagination-btn prev-btn`}>
                        &larr; Previous
                    </button>
                </Link>}
                {page < 14 && <Link to={`/pokemon/${parseInt(page) + 1}`}>
                    <button className="pagination-btn next-btn">
                        Next &rarr;
                    </button>
                </Link>}
            </div>
        </div>
    )
}