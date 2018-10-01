import React, { Component } from 'react';
import { Provider } from 'react-redux';

import PlayerInfoContainer from './containers/player-info-container.js';

const App = () => {
	return (
		<main id="main">
			<PlayerInfoContainer />
		</main>
	);
}

const BoundApp = props => {
	return (
		<Provider store={props.store}>
			<App />
		</Provider>
	);
}

export default BoundApp;
