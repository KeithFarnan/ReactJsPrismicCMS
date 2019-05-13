import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import routes from './components/Routes'
import PrismicApp from './PrismicApp';
import * as registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<PrismicApp />, document.getElementById('root'));
// using the service worker to cache pages
registerServiceWorker.register();
