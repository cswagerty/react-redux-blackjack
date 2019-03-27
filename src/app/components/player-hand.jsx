import React from 'react';

const PlayerHand = props => {
    const cards = props.cards || [];
    return (
    	<section className="player-hand">
        	{cards.map((card, i) => <div className="card" key={i}>{card.name} {card.suit}</div>)}
        </section>
    )
}

export default PlayerHand;