import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './shop.styles.scss';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import Collection from '../collection/collection.component';

import WithLoader from '../../components/withLoader/withLoader.component';
import { selectDataFetchingStatus } from '../../redux/shop/shop.selectors';
import { fetchCollectionStart } from '../../redux/shop/shop.actions';

const CollectionWithLoader = WithLoader(Collection);
const CollectionsOverviewWithLoader = WithLoader(CollectionsOverview);

const Shop = ({ match, isDataFetched, fetchCollection }) => {

    useEffect(() => {
        if (isDataFetched === false) fetchCollection();
    }, [])

    return (
        <Switch>
            <Route exact path={match.path}
                render={(props) => <CollectionsOverviewWithLoader isDataFetched={isDataFetched} {...props} />}
            />
            <Route
                path={`${match.path}/:collectionID`}
                render={(props) => <CollectionWithLoader isDataFetched={isDataFetched} {...props} />}
            />
        </Switch>
    );
}

const mapStateToProps = createStructuredSelector({
    isDataFetched: selectDataFetchingStatus
});

const mapDispatchToProps = (dispatch) => ({
    fetchCollection: () => dispatch(fetchCollectionStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Shop);