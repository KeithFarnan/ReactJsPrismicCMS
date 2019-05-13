import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Preview from '../Preview';
import NotFound from './NotFound';
import HomePage from './HomePage';
import Page from './Page';
import Pages from './Pages'
import Document from './Document'

const routes = (props) => (
    <Router>
      <Switch>
        <Route exact path="/" render={routeProps => <HomePage {...routeProps} prismicCtx={props.prismicCtx} />} />
        <Route exact path="/preview" render={routeProps => <Preview {...routeProps} prismicCtx={props.prismicCtx} />} />
        <Route exact path="/pages/:uid" render={routeProps => <Page {...routeProps} prismicCtx={props.prismicCtx} />} />
        <Route exact path="/pages" render={routeProps => <Pages {...routeProps} prismicCtx={props.prismicCtx} />} />
        <Route exact path="/documents/:uid" render={routeProps => <Document {...routeProps} prismicCtx={props.prismicCtx} />} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
  export default routes;