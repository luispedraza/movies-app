import React, { useState } from 'react'
import { SearchResultsItem } from './SearchResultsItem'
import './SearchResultsGrid.css'


export const SearchResultsGrid = ({results}) => {
    
    return (
        <div className='search-results-grid'>
        {
            results.map(r => {
                return <SearchResultsItem 
                key={r.id}
                {...r}
                />
            })
        }
        </div>
        
        )
    }
    