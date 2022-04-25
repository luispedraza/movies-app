import React from 'react'
import './SearchResultsItem.css'


export const SearchResultsItem = ({id, image, title, description}) => {
  return (
    <div className='search-results-item'>
        <img src={image} />
        <h4>{title}</h4>
        <p>{description}</p>
    </div>
  )
}
