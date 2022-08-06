import React from 'react';

import './search-home.styles.scss';

import SearchBar from '../../components/searchbar/searchbar.component';

import { ReactComponent as SearchFigure } from '../../assets/icons/searchpage.svg';

const SearchHomePage = () => {
  return (
    <div className="search-homepage">
      <SearchBar />
      <h4 className="search-homepage__heading">
        Type keywords relative to the product you want to search
      </h4>
      <SearchFigure className="search-homepage__figure" />
    </div>
  );
};

export default SearchHomePage;
