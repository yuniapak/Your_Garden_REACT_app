const Search = (props) =>{
    return(
        <div onSubmit={props.onSubmit}>
            <input type='text' name='search' value ={props.value} placeholder = 'Search for a plant' onChange={props.handleChange}></input>
            <button type='submit' onClick={props.getSearchResults} className='searchButton'>Search</button>
        </div>
    )
}
export default Search