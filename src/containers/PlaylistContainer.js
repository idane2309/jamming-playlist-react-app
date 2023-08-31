import React, { useState, useEffect } from 'react';
import PlaylistDisplay from '../components/PlaylistDisplay';

function PlaylistContainer(props) {
    

    return (
        <PlaylistDisplay 
        onChangeName={props.onChangeName} 
        playlistTracks={props.playlistTracks} 
        onRemove={props.onRemove}
        onSave={props.onSave}
        onAdd={props.onAdd}
        />
    )
}

export default PlaylistContainer;