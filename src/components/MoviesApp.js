
import { SearchMovies } from './SearchMovies';
import { SearchResultsGrid } from './SearchResultsGrid';
import './MoviesApp.css';
import { useState } from 'react';



function App() {

  const [results, setResults] = useState([]);
  const [currentMovie, setCurrentMovie] = useState({});
  
  return (
    <div className="App">
    <SearchMovies setResults={setResults} />
    <SearchResultsGrid results={results}/>
    </div>
    );
  }
  
  export default App;
  