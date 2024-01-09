export default function SearchBar( {targetValue, handleSearch }) {
    return (
        <label>Perform a search:
            <input type="text"
            placeholder="Type name of Pokemon"
            value = {targetValue}
            onChange={handleSearch}
            autoFocus />
        </label>
                       
    )
}