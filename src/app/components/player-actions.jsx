import React from 'react';

const PlayerActions = props => {

	return (
		<ul className="player-actions">
			<li>
				<button 
					className="player-action"
					onClick={props.handleDealClick}
				>Deal</button>
			</li>
		</ul>
	)
}

export default PlayerActions;