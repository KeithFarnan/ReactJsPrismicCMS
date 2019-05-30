import React from 'react';
import ReactDOM from 'react-dom';
import PrismicApp from './PrismicApp';

import * as registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <PrismicApp />,
  document.getElementById('root'),
);

registerServiceWorker.register();

//const PORT = process.env.PORT || 5000;
//PrismicApp.listen(PORT);
