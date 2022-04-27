
import { SearchMovies } from './SearchMovies';
import { SearchResultsGrid } from './SearchResultsGrid';
import './MoviesApp.css';
import { useEffect, useState } from 'react';
import MovieDetail from './MovieDetail';
import IMD_API from '../helpers/imdb';


function App() {
  
  const [results, setResults] = useState([]);
  const [currentMovie, setCurrentMovie] = useState(null);
  const [query, setQuery] = useState("");
  

  useEffect(() => {
    if (query.length == 0) return;
    console.log(query);
    IMD_API.search(query)
    .then(results => {
      console.log(results);
      setResults(results);
    })
  }, [query]);
  
  
  return (
    <div className="App">
    <SearchMovies setQuery={setQuery} />
    <SearchResultsGrid results={results}/>
    <MovieDetail id={currentMovie} />
    </div>
    );
  }
  
  export default App;
  