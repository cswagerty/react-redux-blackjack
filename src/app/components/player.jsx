import React from 'react';

import PlayerResultsContainer from '../containers/player-results-container';
import PlayerHandContainer from '../containers/player-hand-container';

const Player = props => {
	const { id, playerClasses} = props;

	return (
		<div className={playerClasses}>
			<PlayerResultsContainer playerId={id} />
			<PlayerHandContainer playerId={id} />
		</div>
	);
}

export default Player;
