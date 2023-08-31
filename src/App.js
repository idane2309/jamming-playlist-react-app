import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import SearchBarContainer from './containers/SearchBarContainer';
import SearchResultsContainer from './containers/SearchResultsContainer';
import PlaylistContainer from './containers/PlaylistContainer';
import Spotify from "./Spotify"

function App() {
  const [results, setResults] = useState([])
  const [playlistName, setPlaylistName] = useState("")
  const [playlistTracks, setPlaylistTracks] = useState([])

  function search(search) {
    Spotify.search(search).then((results) => {
      setResults(results)
    })
  }
  
  function addTrack(track) {
    if (playlistTracks.some((savedTrack) => savedTrack.id === track.id)) {
      return
    }
    setPlaylistTracks((prev) => [...prev, track])
  }

  function removeTrack(track) {
    setPlaylistTracks((prev) => prev.filter((savedTrack) => savedTrack.id !==track.id))
  }

  function updatePlaylistName(name) {
    setPlaylistName(name)
  }

  function saveToPlaylist() {
    const trackUris = playlistTracks.map((track) => track.uri)
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      setPlaylistName("New Playlist")
      setPlaylistTracks([])
    })
  }

  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBarContainer onSearch={search}/>
        <div className="App-playlist">
          <SearchResultsContainer results={results} onAdd={addTrack} /> 
          <PlaylistContainer
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onChangeName={updatePlaylistName}
            onRemove={removeTrack}
            onSave={saveToPlaylist}
           />
        </div>
      </div>
    </div>
  );
}

export default App;
