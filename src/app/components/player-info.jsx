import React from 'react';

const PlayerInfo = props => {
	const { visible, username } = props;

	if (!visible) {
		return null;
	}

	return (
		<section className="player-info">
			<h2>{username}</h2>
			<h3>Balance: $1,000</h3>
		</section>
	)
}

export default PlayerInfo;
