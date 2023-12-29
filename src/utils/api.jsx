export default async function getPokemon() {
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