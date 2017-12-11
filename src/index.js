import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

// Assets
import './assets/scss/general.css';

// Component App
import App from './components/core/app/App.js';

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
