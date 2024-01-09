import { useRef, useState, useEffect } from "react";
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
    const [matchedPokemon, setMatchedPokemon] = useState(searchParams.getAll("search") || [])
    const [targetValue, setTargetValue] = useState("")
    
    

    function handleSearch(e) {
            if (e.target.value === "") {
            setMatchedPokemon([]);
            setTargetValue("");
            setSearchParams({});
            SearchListPRef.current.style.display = "none";
        } else {
            SearchListPRef.current.style.display = "flex";
            const matchedPokemon = allPokemon.results.map(poke => poke.name).filter(poke => poke.includes(e.target.value.toLowerCase()));
            setMatchedPokemon(matchedPokemon);
            setSearchParams( {search: matchedPokemon} );
            setTargetValue(e.target.value);
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
                            placeholder="Type name of Pokemon or ID"
                            value = {targetValue}
                            onChange={handleSearch}/>
                    </p>
                    <div ref={SearchListPRef} style={matchedPokemon.length > 0 ? {display:"flex"} : {display: "none"}}><SearchList matchedPokemon={matchedPokemon} targetValue={targetValue} /></div>
                    <p>or</p>
                    <p><Link to="1"><button className="pagination-btn">Go to Pokemon List</button></Link></p>
                </div>
            </div>
    )
}