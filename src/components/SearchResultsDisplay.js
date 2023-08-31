import React from 'react';
import TracklistContainer from '../containers/TracklistContainer';
import '../modules/SearchResults.css';

function SearchResultsDisplay(props) {
    return (
        <div className="SearchResults">
            <h2>Results</h2>
            <TracklistContainer tracks={props.results} onAdd={props.onAdd} />
        </div>
    )
}

export default SearchResultsDisplay;