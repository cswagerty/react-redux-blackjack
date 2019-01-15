import React from 'react';

import PlayerResultsContainer from '../containers/player-results-container';
import PlayerActionsContainer from '../containers/player-actions-container';
import PlayerHand from '../components/player-hand.jsx';

const Table = props => {

	return (
		<section className="table">
			<PlayerResultsContainer />
			<PlayerHand dealtCards={props.dealtCards} />
			<PlayerActionsContainer />
		</section>
	);
}

export default Table;
