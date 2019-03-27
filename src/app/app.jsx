import React, { Component } from 'react';
import { Provider } from 'react-redux';

import LoginFormContainer from './containers/login-form-container';
import PlayerInfoContainer from './containers/player-info-container';
import TableContainer from './containers/table-container';

const App = () => {
	return (
		<main id="main">
			<LoginFormContainer />
			<TableContainer />
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
