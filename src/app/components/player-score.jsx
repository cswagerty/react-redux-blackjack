import React from 'react';

const PlayerScore = props => {
    return (
    	<section className="player-score">
        	<p>{props.score}</p>
        </section>
    )
}

export default PlayerScore;