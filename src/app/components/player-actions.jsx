import React from 'react';

const PlayerActions = props => {

	return (
		<ul className="player-actions">
			{createPlayerActionButtons(props)}
		</ul>
	)
}

const createPlayerActionButtons = props => {
	const { actionButtons, clickHandlers, playerId } = props;
	return actionButtons.map(button => <li className="player-action"><button onClick={handleActionClick.bind(this, clickHandlers, button.handlerName, playerId)}>{button.text}</button></li>);
}

const handleActionClick = (clickHandlers, handlerName, playerId) => {
	clickHandlers[handlerName](playerId)
}

export default PlayerActions;