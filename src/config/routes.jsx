import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import React from 'react';
import App from '../containers/app';
import history from './history';

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={App} />
    </Switch>
  </Router>
);

export default Routes;
