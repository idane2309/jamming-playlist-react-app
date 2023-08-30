import React from 'react';

function TrackDisplay(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <h4>{props.artist}| {props.album}</h4>
            <button onClick={props.onClick}>+</button>
            <hr />
        </div>
    )
}

export default TrackDisplay;