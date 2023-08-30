import React, { useState, useEffect } from 'react';
import TracklistDisplay from '../components/TracklistDisplay';

function TracklistContainer(props) {

    return (
        <TracklistDisplay songs={props.songs} setPlaylist={props.setPlaylist} />
    )
}

export default TracklistContainer;