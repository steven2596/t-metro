import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectAllItems } from '../../redux/shop/shop.selectors';

import Item from '../../components/item/item.component';
import SearchBar from '../../components/searchbar/searchbar.component';
import { ReactComponent as EmptySearch } from '../../assets/icons/empty-search.svg';

import './search-page.styles.scss';

const SearchPage = ({ match, items }) => {

    const searchQuery = match.params.query;

    const resultItems = items.filter(item => (
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
    ))

    return (
        <div className="searchpage" >
            <div className="searchpage__searchbar-group" >
                <SearchBar />
                <h4 className="searchpage__heading">Type keywords relative to the product you want to search</h4>
            </div>

            <h4 className="searchpage__results-count">{resultItems.length} results were found</h4>
            {
                resultItems.length > 0 ?
                    <div className="searchpage__items" >
                        {
                            resultItems.map(item =>
                                <Item key={item.id} item={item} />)
                        }

                    </div> :
                    <div className="searchpage__empty-container" >
                        <span className="searchpage__empty-text">No results found</span>
                        <EmptySearch className="searchpage__empty-icon" />
                    </div>
            }

        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    items: selectAllItems
})

export default connect(mapStateToProps)(SearchPage);