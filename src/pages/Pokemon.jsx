import { useRef, useState } from "react";
import { Link, Outlet, useParams, useLoaderData, useSearchParams } from "react-router-dom"
import { getAllPokemon } from '../utils/api'
import SearchList from '../components/SearchList'

export async function loader() {
    return await getAllPokemon();
}

export default function Pokemon() {
    const allPokemon = useLoaderData()
    const SearchListPRef = useRef()
    const params = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const [matchedPokemon, SetMatchedPokemon] = useState(searchParams.getAll("search") || [])
    const [targetValue, setTargetValue] = useState("")

    function handleSearch(e) {
        if (e.target.value === "") {
            SetMatchedPokemon([]);
            SearchListPRef.current.style.display = "none";
        } else {
            SearchListPRef.current.style.display = "flex";
            const matchedPokemon = allPokemon.results.map(poke => poke.name).filter(poke => poke.includes(e.target.value.toLowerCase()));
            SetMatchedPokemon(matchedPokemon);
            setSearchParams( {search: matchedPokemon} );
            setTargetValue(e.target.value)
        }
    }

    return (
        params.page || params. id ? <Outlet /> :
            <div>
                <h1>This is the Pokemon Page</h1>
                <div className="pokemon-div">
                    <p><label htmlFor="searchbar">Perform a search: </label>
                        <input id="searchbar" 
                            type="text" 
                            value = {targetValue}
                            placeholder="Type name of Pokemon or ID"
                            onChange={handleSearch}/>
                    </p>
                    <div ref={SearchListPRef} style={matchedPokemon.length > 0 ? {display:"flex"} : {display: "none"}}><SearchList matchedPokemon={matchedPokemon} /></div>
                    <p>or</p>
                    <p><Link to="1"><button className="pagination-btn">Go to Pokemon List</button></Link></p>
                </div>
            </div>
    )
}