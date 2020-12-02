import React from 'react'
import './searchbar.css'

function SearchBar() {
    return (
        <div    className = "wrap">
            <div    className = "search">
                <input  type  = "text" className   = "searchTerm" placeholder = "What are you looking for?"/>
                <button type  = "submit" className = "searchButton">
                <span>🔍</span>
                </button>
            </div>
        </div>
    )
}

export default SearchBar
