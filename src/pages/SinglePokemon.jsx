import { useLoaderData } from "react-router-dom";
import { getSinglePokemon } from '../utils/api'

export async function loader(req) {
    return await getSinglePokemon(req.params.id);
}

export default function SinglePokemon() {
    const pokemon = useLoaderData();
    return (
        <div className="poke-card">
            <div className="img-cluster">
                {pokemon.sprites.front_default && <img src={pokemon.sprites.front_default} width="150" />}
                {pokemon.sprites.back_default && <img src={pokemon.sprites.back_default} width="150" />}
            </div>
            <div className="main-info-cluster">
                <h1 className="poke-card-name">{pokemon.species.name}</h1>
                <p className="poke-card-index">Index: {pokemon.id}</p>
            </div>
            <p className="poke-card-type">Type{pokemon.types.length > 1 ? "s" : ""}: {pokemon.types.map(typeIndex => `${typeIndex.type.name}${pokemon.types.length === typeIndex.slot ? "" : ", "}`)}</p>
        </div>
    )
}