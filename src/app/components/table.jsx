import React from 'react';

import PlayerContainer from '../containers/player-container';
import PlayerActionsContainer from '../containers/player-actions-container';


const Table = props => {
	const { players } = props;

	return (
		<section className="table">
			{players.map(player => <PlayerContainer id={player.id} />)}
			<PlayerActionsContainer />
		</section>
	);
}

export default Table;
