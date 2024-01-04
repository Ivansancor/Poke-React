export async function getPokemon() {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0');
    if (!res.ok) {
        throw {
            message: "Failed to load Pokemon",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json();
    return data.results;
}

export async function getSinglePokemon(id) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if (!res.ok) {
        throw {
            message: "Failed to load individual Pokemon",
            statusText: res.statusText,
            status: res.status
        }
    }
    return await res.json();
}