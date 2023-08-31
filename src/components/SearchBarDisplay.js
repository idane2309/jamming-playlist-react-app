import React from 'react';
import '../modules/SearchBar.css'

function SearchBarDisplay(props) {
    return (
        <div className="SearchBar" >
            <input type="text" placeholder="Enter a song title..." onChange={props.onChange} />
            <button className="SearchButton" onClick={props.onClick}>Search</button>
        </div>
    )
}

export default SearchBarDisplay