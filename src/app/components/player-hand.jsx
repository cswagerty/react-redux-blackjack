import React from 'react';

import Card from './card.jsx';

const PlayerHand = props => {
    const cards = props.cards || [];
    return (
    	<section className="player-hand">
        	{cards.map((card, i) => <Card key={i} name={card.name} suit={card.suit} />)}
        </section>
    )
}

export default PlayerHand;