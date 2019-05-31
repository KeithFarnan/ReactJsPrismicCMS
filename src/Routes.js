import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import NotFound from './Components/Pages/NotFound';
import HomePage from './Components/Pages/HomePage';
import Page from './Components/Pages/Page';
import Pages from './Components/Pages/AllPages'
import Document from './Components/Pages/Document'
import Documents from './Components/Pages/AllDocuments'

const Routes = (props) => (
  <Router>
    <Switch>
      <Route exact path="/" render={routeProps => <HomePage {...routeProps} prismicCtx={props.prismicCtx} />} />
      <Route exact path="/pages/:uid" render={routeProps => <Page {...routeProps} prismicCtx={props.prismicCtx} />} />
      <Route exact path="/pages" render={routeProps => <Pages {...routeProps} prismicCtx={props.prismicCtx} />} />
      <Route exact path="/documents/:uid" render={routeProps => <Document {...routeProps} prismicCtx={props.prismicCtx} />} />
      <Route exact path="/documents" render={routeProps => <Documents {...routeProps} prismicCtx={props.prismicCtx} />} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);
export default Routes;
