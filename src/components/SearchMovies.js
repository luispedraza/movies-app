import React, { useState } from 'react'
import IMD_API from '../helpers/imdb';

export const SearchMovies = ({setResults}) => {

    const [expression, setExpression]= useState("");

    const API = new IMD_API();
    
    const handleOnSubmit = (e) => {
        e.preventDefault();
        API.search(expression)
            .then(results => {
                setResults(results)
            })
        setExpression("");
    }

    const handleOnChangeInput = (e) => {
        setExpression(e.target.value);
    }
    
    return (
        <div id="search-movies">
        <h3>Search a movie</h3>
        <form onSubmit={handleOnSubmit}>

        <input 
            type="text" 
            placeholder="name of the movie"
            value={expression} 
            onChange={handleOnChangeInput}/>
        <button>Search movies</button>
        <button>Search TV Series</button>
        </form>
        </div>
        
        )
    }
    