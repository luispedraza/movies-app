import React from 'react'
import './SearchResultsItem.css'
import IMD_API from '../helpers/imdb'

export const SearchResultsItem = ({id, image, title, description}) => {

  const getDetails = (e) => {
    const api = new IMD_API();
    api.movieDetails(e.target.id)
      .then(results => {
        console.log(results);
      })
    
  }
  return (
    <div className='search-results-item' id={id} onClick={getDetails}>
        <img src={image} alt="Movie"/>
        <h4>{title}</h4>
        <p>{description}</p>
    </div>
  )
}
