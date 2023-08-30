import React from 'react';
import TrackContainer from '../containers/TrackContainer';

function TracklistDisplay(props) {
    return (
        <ul>
            {props.songs.map((track) => {
                return (
                    <TrackContainer track={track} setPlaylist={props.setPlaylist}/>
                )
            })}
        </ul>
    )
}

export default TracklistDisplay;