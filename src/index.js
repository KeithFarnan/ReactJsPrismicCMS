import React from 'react';
import ReactDOM from 'react-dom';
import PrismicApp from './PrismicApp';
import * as ServiceWorker from './serviceWorker';

ReactDOM.render(<PrismicApp />, document.getElementById('root'));
ServiceWorker.register();
