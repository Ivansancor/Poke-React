import { useLoaderData, Link } from "react-router-dom";
import { getSinglePokemon } from '../utils/api'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignal } from '@fortawesome/free-solid-svg-icons'

export async function loader(req) {
    return await getSinglePokemon(req.params.id);
}

export default function SinglePokemon() {
    const pokemon = useLoaderData();

    return (
        <div className="single-pokemon-div">
            {pokemon.id > 10001 ?
                <Link to={`/pokemon/${pokemon.id - 1}`}>
                    <button className="pagination-btn">
                        &larr; Previous
                    </button>
                </Link>
                :
            pokemon.id === 10001 ?
                <Link to={`/pokemon/${pokemon.id - 8976}`}>
                    <button className="pagination-btn">
                    &larr; Previous
                    </button>
                </Link>
                :
            pokemon.id > 1 && pokemon.id <= 1025 ?
                <Link to={`/pokemon/${pokemon.id - 1}`}>
                    <button className="pagination-btn">
                        &larr; Previous
                    </button>
                </Link>
                :
                <button className="pagination-btn" style={{visibility:"hidden"}}></button>
            }
            <div className={pokemon.id > 10000 ? "poke-card poke-card-special" : "poke-card"}>
                <div className="img-cluster">
                    {pokemon.sprites.front_default && <img src={pokemon.sprites.front_default} width="125" 
                        onMouseEnter={e => e.target.src = pokemon.sprites.back_default || pokemon.sprites.front_default} 
                        onMouseLeave={e => e.target.src = pokemon.sprites.front_default }
                    />}
                    {/* {pokemon.sprites.back_default && <img src={pokemon.sprites.back_default} width="125" />} */}
                </div>
                <div className="main-info-cluster">
                    <h1 className="poke-card-name">{pokemon.name}</h1>
                    {/* <p className="poke-card-type">Type{pokemon.types.length > 1 ? "s" : ""}: {pokemon.types.map(typeIndex => `${typeIndex.type.name}${pokemon.types.length === typeIndex.slot ? "" : ", "}`)}</p> */}
                    <p className="poke-card-index">Index: {pokemon.id}</p>
                    {pokemon.id > 10000 && 
                        <p className="poke-card-special-info">
                            <FontAwesomeIcon icon={faSignal} /> ~ Special entry ~ <FontAwesomeIcon icon={faSignal} flip="horizontal"/>
                        </p>
                    }
                    <p className="poke-card-type">
                        {pokemon.types.length >= 1 && pokemon.types.map(typeIndex => {
                            return <span className={`type-pill ${typeIndex.type.name}`} key={typeIndex.type.name}>
                                {typeIndex.type.name}
                            </span>
                        })}
                    </p>
                </div>
            </div>
            {pokemon.id < 1025 ?
                <Link to={`/pokemon/${pokemon.id + 1}`}>
                    <button className="pagination-btn">
                        Next &rarr;
                    </button>
                </Link>
                :
            pokemon.id === 1025 ?
                <Link to={`/pokemon/${pokemon.id + 8976}`}>
                    <button className="pagination-btn">
                        Next &rarr;
                    </button>
                </Link>
                :
            pokemon.id >= 10001 && pokemon.id < 10277 ?
                <Link to={`/pokemon/${pokemon.id + 1}`}>
                    <button className="pagination-btn">
                        Next &rarr;
                    </button>
                </Link>
                :
                <button className="pagination-btn" style={{visibility:"hidden"}}></button>
            }
        </div>
    )
}