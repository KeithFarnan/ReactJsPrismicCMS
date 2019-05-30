import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import NotFound from './Components/NotFound';
import HomePage from './Components/HomePage';
import Page from './Components/Page';
import Pages from './Components/Pages'
import Document from './Components/Document'
import Documents from './Components/Documents'

const App = (props) => (
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
export default App;
