import React from 'react';

const PlayerActions = props => {

	return (
		<ul className="player-actions">
			{createPlayerActionButtons(props)}
		</ul>
	)
}

const createPlayerActionButtons = props => {
	const { actionButtons } = props;
	return actionButtons.map(button => <li className="player-action"><button onClick={props[button.clickHandler]}>{button.text}</button></li>);
}

export default PlayerActions;