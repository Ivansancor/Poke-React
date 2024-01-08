export async function getPokemon(page) {
    if (page > 0 && page < 15) {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=100&offset=${(page - 1) * 100}`);
        if (!res.ok) {
            throw {
                message: "Failed to load Pokemon page",
                statusText: res.statusText,
                status: res.status
            }
        } return await res.json();
    } else {
        throw new Error("This Pokemon page does not exist.")
    }
}

export async function getAllPokemon() {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=2000");
    if (!res.ok) {
        throw {
            message: "Failed to load Pokemon data.",
            statusText: res.statusText,
            status: res.status
        }
    } return await res.json();
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