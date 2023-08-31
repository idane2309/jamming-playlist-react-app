import React, {useState, useEffect} from 'react';
import SearchResultsDisplay from '../components/SearchResultsDisplay';

function SearchResultContainer(props) {
    return (
        <SearchResultsDisplay results={props.results} onAdd={props.onAdd}/>
    )
}

export default SearchResultContainer;