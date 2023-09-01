import React, { useState, useEffect } from 'react';
import TracklistDisplay from '../components/TracklistDisplay';

function TracklistContainer(props) {

    return (
        <TracklistDisplay 
        tracks={props.tracks} 
        onAdd={props.onAdd} 
        onRemove={props.onRemove} 
        isRemoval={props.isRemoval} 
        />
    )
}

export default TracklistContainer;