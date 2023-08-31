import React from 'react';
import TracklistContainer from '../containers/TracklistContainer';
import '../modules/Playlist.css';

function PlaylistDisplay(props) {
    function handleChangeName(event) {
        props.onChangeName(event.target.value);
    }

    return (
        <div className="Playlist">
            <input onChange={handleChangeName} type="text" defaultValue={"New Playlist"}/>
            <TracklistContainer 
            tracks={props.playlistTracks} 
            isRemoval={true}
            onRemove={props.onRemove}
            />
            <button className="Playlist-save" onClick={props.onSave}>
                Save to Spotify
            </button>
        </div>
    )
}

export default PlaylistDisplay;