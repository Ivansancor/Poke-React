import { Link, Outlet, useParams } from "react-router-dom"

export default function Pokemon() {
    const params = useParams();
    return (
        params.page || params. id ? <Outlet /> :
            <div>
                <h1>This is the Pokemon Page</h1>
                <div className="pokemon-div">
                    <p><label htmlFor="searchbar">Perform a search: </label><input id="searchbar" type="text" placeholder="Type name of Pokemon or ID"/></p>
                    <p>or</p>
                    <p><Link to="1"><button className="pagination-btn">Go to Pokemon List</button></Link></p>
                </div>
            </div>
    )
}