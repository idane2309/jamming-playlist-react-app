import React, { useState , useEffect } from 'react';
import SearchBarDisplay from '../components/SearchBarDisplay';


function SearchBarContainer(props) {
    const [search, setSearch] = useState('');

    function handleChange(event) {
        setSearch(event.target.value);
    }

    function find() {
        props.onSearch(search);
    }

    return (
        <SearchBarDisplay onChange={handleChange} onClick={find} />
    )
}

export default SearchBarContainer