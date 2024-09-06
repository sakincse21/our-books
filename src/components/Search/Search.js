import React from 'react';
import './Search.css';

const Search = () => {
    return (
        <div className='searchArea'>
            <div className="searchBox">
                <input type="search" name="search" id="search" />
                <input type="button" value="Search Now" id='button'/>
            </div>
        </div>
    );
};

export default Search;