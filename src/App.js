import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Preview from './Preview';
import NotFound from './components/NotFound';
import HomePage from './components/HomePage';
import Page from './components/Page';
import Pages from './components/Pages'
import Document from './components/Document'
import Documents from './components/Documents'

const App = (props) => (
  <Router>
    <Switch>
      <Route exact path="/" render={routeProps => <HomePage {...routeProps} prismicCtx={props.prismicCtx} />} />
      <Route exact path="/preview" render={routeProps => <Preview {...routeProps} prismicCtx={props.prismicCtx} />} />
      <Route exact path="/pages/:uid" render={routeProps => <Page {...routeProps} prismicCtx={props.prismicCtx} />} />
      <Route exact path="/pages" render={routeProps => <Pages {...routeProps} prismicCtx={props.prismicCtx} />} />
      <Route exact path="/documents/:uid" render={routeProps => <Document {...routeProps} prismicCtx={props.prismicCtx} />} />
      <Route exact path="/documents" render={routeProps => <Documents {...routeProps} prismicCtx={props.prismicCtx} />} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);
export default App;
