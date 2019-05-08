import React from 'react';

const PlayerInfo = props => {
	const { username } = props;

	return (
		<section className="player-info">
			<h2>{username}</h2>
		</section>
	)
}

export default PlayerInfo;
