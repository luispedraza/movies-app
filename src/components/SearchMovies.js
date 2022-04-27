import React, { useState } from 'react'

export const SearchMovies = ({setQuery}) => {

    const [expression, setExpression]= useState("");
    
    const handleOnSubmit = (e) => {
        e.preventDefault();
        setQuery(expression);
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
    