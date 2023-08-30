import React, { useState , useEffect } from 'react';
import SearchBarDisplay from '../components/SearchBarDisplay';

function SearchBarContainer(props) {
    const { search, setSearch, setResults } = props
    
    function handleChange(event) {
        setSearch(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(search);
    }

    return (
        <SearchBarDisplay search={search} onChange={handleChange} onSubmit={handleSubmit} />
    )
}

export default SearchBarContainer