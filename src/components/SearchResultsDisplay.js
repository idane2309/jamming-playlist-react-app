import React from 'react';

function SearchResultsDisplay(props) {
    return (
        <div>
            <h2>Results</h2>
            <ul>
                {props.results.map((result) => {
                    return (
                        <li>
                            {result.title} by {result.artist}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default SearchResultsDisplay;