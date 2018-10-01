import React from 'react';
import ReactDOM from 'react-dom';

// TODO: Only enable for local dev
import '../styles/main.scss';

import BoundApp from './app.jsx';
import store from './store.js';

// initialize app
ReactDOM.render(<BoundApp store={store} />, document.querySelector('body'));
 