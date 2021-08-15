import React from 'react';

import { Route, Switch } from 'react-router-dom';
import CollectionPage from '../collection-page/collection-page.component';
import ItemPage from '../item-page/item-page.component';

const Collection = ({ match }) => {
    return (
        <Switch>
            <Route exact path={match.path} component={CollectionPage} />
            <Route exact path={`${match.path}/:itemID`} component={ItemPage} />
        </Switch>
    )
};

export default Collection;