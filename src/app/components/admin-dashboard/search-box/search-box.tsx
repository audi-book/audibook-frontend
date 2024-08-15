import React, { useState } from 'react';
import './search-box.css';

interface SearchBoxProps {
}

const SearchBox: React.FC<SearchBoxProps> = () => {
    const [query, setQuery] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    const handleSearch = () => {
    };

    return (
        <div className="search-container">
            <input
                type="text"
                className="search-input"
                placeholder="Search by Reservation ID"
                value={query}
                onChange={handleInputChange}
            />
            <button className="search-button" onClick={handleSearch}>
                Search
            </button>
        </div>
    );
};

export default SearchBox;
