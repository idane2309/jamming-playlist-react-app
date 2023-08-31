import React from 'react';
import '../modules/Track.css';

function TrackDisplay(props) {
    function addTrack() {
        props.onAdd(props.track)
    }

    function removeTrack() {
        props.onRemove(props.track)
    }   

    function createActions() {
        if (props.isRemoval) {
            return (
                <button className="Track-action" onClick={removeTrack}>
                  -
                </button>
            )
        }
        return (
            <button className="Track-action" onClick={addTrack}>
              +
            </button>
        )
    }

    return (
        <div className="Track">
            <div className="Track-information">
                <h3>{props.track.name}</h3>
                <p>
                  {props.track.artist} | {props.track.album}
                </p>
            </div>
            {createActions()}
        </div>
    )
}

export default TrackDisplay;