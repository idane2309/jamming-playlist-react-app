import React from 'react';
import TracklistContainer from '../containers/TracklistContainer';

function PlaylistDisplay(props) {
    const { search, onSubmit, onChange, songs , setPlaylist} = props

    return (
        <div>
            <h2>Playlist</h2>
            <form onSubmit={onSubmit}>
                <input type="text" value={search} onChange={onChange} />
                <button type="submit">Save to Spotify</button>
            </form>
            <TracklistContainer songs={songs} setPlaylist={setPlaylist}/>

        </div>
    )
}

export default PlaylistDisplay;