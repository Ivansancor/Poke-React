import { useRef, useState} from "react";
import { Link, Outlet, useParams, useLoaderData, useSearchParams } from "react-router-dom"
import { getAllPokemon } from '../utils/api'
import SearchList from '../components/SearchList'
import SearchBar from '../components/SearchBar'

export async function loader() {
    return await getAllPokemon();
}

export default function Pokemon() {
    const allPokemon = useLoaderData()
    const SearchListPRef = useRef()
    const params = useParams();
    
    const [searchParams, setSearchParams] = useSearchParams({});
    const [matchedPokemon, setMatchedPokemon] = useState(searchParams.getAll("search") || [])
    const [targetValue, setTargetValue] = useState("")

    function handleSearch(e) {
        const currTargetValue = e.target.value;
        if (currTargetValue === "") {
            setMatchedPokemon([]);
            setTargetValue("");
            setSearchParams({});
            SearchListPRef.current.style.display = "none";
        } else {
            SearchListPRef.current.style.display = "flex";
            const matchedPokemon = allPokemon.results.map(poke => poke.name).filter(poke => poke.includes(currTargetValue.toLowerCase()));
            setMatchedPokemon(matchedPokemon);
            setTargetValue(currTargetValue);
            setSearchParams( {search: matchedPokemon} );
        }
    }


    return (
        params.page || params. id ? <Outlet /> :
            <div>
                <h1>This is the Pokemon Page</h1>
                <div className="pokemon-div">
                    <div><SearchBar targetValue={targetValue} handleSearch={handleSearch}/></div>
                    <div ref={SearchListPRef} style={matchedPokemon.length > 0 ? {display:"flex"} : {display: "none"}}><SearchList matchedPokemon={matchedPokemon} targetValue={targetValue} /></div>
                    <p>or</p>
                    <p><Link to="1"><button className="pagination-btn">Go to Pokemon List</button></Link></p>
                </div>
            </div>
    )
}