import React, {useState, useEffect} from 'react';
import SearchResultsDisplay from '../components/SearchResultsDisplay';

function SearchResultContainer(props) {
    const { results } = props

    return (
        <SearchResultsDisplay results={results}/>
    )
}

export default SearchResultContainer;