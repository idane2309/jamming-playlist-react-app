import React from 'react';

function SearchBarDisplay(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <input type="text" placeholder="Search..." value={props.search} onChange={props.onChange} />
            <button type="submit">Submit</button>
        </form>
    )
}

export default SearchBarDisplay