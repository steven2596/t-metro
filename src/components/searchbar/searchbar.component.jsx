import React, { useState } from 'react';
import { withRouter } from 'react-router';

import './searchbar.styles.scss';

import sprite from '../../assets/icons/sprite.svg';

const SearchBar = ({ history }) => {
    const [search, setSearch] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (search.length > 0) {
            history.push(`/search/${search}`)
        }

    }

    return (
        <form onSubmit={handleSubmit} className="searchbar__form">
            <input
                className={`searchbar__input ${search.length > 0 ? 'input-color' : ''}`}
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
            />
            <button type="submit" className="searchbar__button">
                <svg className={`searchbar__icon ${search.length > 0 ? 'icon-color' : ''}`} >
                    <use href={sprite + '#icon-search'} />
                </svg>
            </button>
        </form>
    );
}

export default withRouter(SearchBar);