import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selectors';

import Item from '../../components/item/item.component';

import './collection-page.styles.scss';

const CollectionPage = ({ collection }) => {
    const { category, items } = collection;

    return (
        <div className="collection-page" >
            <h2 className="title" >{category}</h2>
            <div className="items" >
                {
                    items.map(item => <Item key={item.id} item={item} />)
                }
            </div>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionID)(state)
})

export default connect(mapStateToProps)(CollectionPage);