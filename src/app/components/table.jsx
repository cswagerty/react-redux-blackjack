import React from 'react';

import PlayerContainer from '../containers/player-container';
import PlayerActionsContainer from '../containers/player-actions-container';
import DealerCommanderContainer from '../containers/dealer-commander-container';

const Table = props => {
	const { players } = props;

	return (
		<section className="table">
			<DealerCommanderContainer />
			{players.map(player => <PlayerContainer id={player.id} />)}
			<PlayerActionsContainer />
		</section>
	);
}

export default Table;
