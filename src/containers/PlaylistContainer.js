import React, { useState, useEffect } from 'react';
import PlaylistDisplay from '../components/PlaylistDisplay';

function PlaylistContainer() {
    const [search, setSearch] = useState("")
    const [playlist, setPlaylist] = useState([])
    
    function handleChange(event) {
        setSearch(event.target.value);
    }
    
    function handleSubmit(event) {
        event.preventDefault();
        console.log(search);
    }

    return (
        <PlaylistDisplay search={search} onSubmit={handleSubmit} onChange={handleChange} songs={playlist} setPlaylist={setPlaylist}/>
    )
}

export default PlaylistContainer;