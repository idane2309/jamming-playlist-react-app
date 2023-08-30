import React, { useState, useEffect } from 'react';
import TrackDisplay from '../components/TrackDisplay';

function TrackContainer(props) {
    function handleClick(event) {
        event.preventDefault();
        props.setPlaylist((prev) => prev.filter((song) => song.id !== props.id))
    }

    return (
        <TrackDisplay title={props.track.title} artist={props.track.artist} album={props.track.album} onClick={handleClick}/>
    )
}

export default TrackContainer;