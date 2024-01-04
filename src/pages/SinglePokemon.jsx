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
                <img src={pokemon.sprites.front_default} height="150" />
                <img src={pokemon.sprites.back_default} height="150" />
            </div>
            <h1>{pokemon.species.name}</h1>
            <h2>Index: {pokemon.game_indices.id}</h2>
            <p>Type: {pokemon.types.map(index => <span key={pokemon.species.name}>{index.type.name}</span>)}</p>
        </div>
    )
}