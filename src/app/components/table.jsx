import React from 'react';

import PlayerScoreContainer from '../containers/player-score-container';
import PlayerActionsContainer from '../containers/player-actions-container';
import PlayerHand from '../components/player-hand.jsx';

const Table = props => {

	return (
		<section className="table">
			<PlayerScoreContainer />
			<PlayerHand dealtCards={props.dealtCards} />
			<PlayerActionsContainer />
		</section>
	);
}

export default Table;
