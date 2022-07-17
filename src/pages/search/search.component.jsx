import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SearchHomePage from '../search-home/search-home.component';
import SearchPage from '../search-page/search-page.component';

import './search.styles.scss';

const Search = ({ match }) => {
  return (
    <Switch>
      <Route exact path={match.path} component={SearchHomePage} />
      <Route path={`${match.path}/:query`} component={SearchPage} />
    </Switch>
  );
};

export default Search;
