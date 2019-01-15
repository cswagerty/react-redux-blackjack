import React from 'react';

const PlayerResults = props => {
    return (
    	<section className="player-result">
        	<p>{props.score}</p>
        	<p>{props.status}</p>
        </section>
    )
}

export default PlayerResults;