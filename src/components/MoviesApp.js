
import { SearchMovies } from './SearchMovies';
import { SearchResultsGrid } from './SearchResultsGrid';
import './MoviesApp.css';
import { useState } from 'react';
import MovieDetail from './MovieDetail';



function App() {

  const [results, setResults] = useState([]);
  const [currentMovie, setCurrentMovie] = useState(null);
  
  return (
    <div className="App">
    <SearchMovies setResults={setResults} />
    <SearchResultsGrid results={results}/>
    <MovieDetail id={currentMovie} />
    </div>
    );
  }
  
  export default App;
  