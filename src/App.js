import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import NotFound from './NotFound';
import './App.css';
import Document from './Document';


const App = (props) => (

  <Router>
    <Switch>
      <Redirect exact from="/" to="/document/document1"/>
      <Route exact path="/document/:uid" render={routeProps => <Document {...routeProps} prismicCtx={props.prismicCtx} />} />
      <Route component={NotFound} />
    </Switch>

  </Router>
);

export default App;
