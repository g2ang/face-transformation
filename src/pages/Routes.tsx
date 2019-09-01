import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import IndexPage from './IndexPage';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={IndexPage} />
    <Redirect to="/" />
  </Switch>
);

export default Routes;
