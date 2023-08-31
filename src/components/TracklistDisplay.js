import React from 'react';
import TrackContainer from '../containers/TrackContainer';
import '../modules/TrackList.css';

function TracklistDisplay(props) {
    return (
        <div className="TrackList">
            {props.tracks.map((track) => {
                return (
                    <TrackContainer 
                    track={track} 
                    key={track.id}
                    onAdd={props.onAdd}
                    onRemove={props.onRemove}
                    isRemoval={props.isRemoval}
                    />
                )
            })}
        </div>
    )
}

export default TracklistDisplay;