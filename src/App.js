import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import SearchBarContainer from './containers/SearchBarContainer';
import SearchResultsContainer from './containers/SearchResultsContainer';
import PlaylistContainer from './containers/PlaylistContainer';


function App() {
  const [search, setSearch] = useState("")
  const [results, setResults] = useState([])

  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBarContainer search={search} setSearch={setSearch} setResults={setResults} />
        <div className="App-playlist">
          <SearchResultsContainer results={results} /> 
          <PlaylistContainer />
        </div>
      </div>
    </div>
  );
}

export default App;
