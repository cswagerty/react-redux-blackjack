import React from 'react';

const Card = props => {
	const { name, suit } = props;
    return (
		<div className={getCardClasses(suit)}>
		    <div class="face face-front">
		        <div class="card-corner card-corner-top">
		            <span class="card-name">{name}</span>
		            <span class="card-suit">{getSuitSymbol(suit)}</span>
		        </div>
		        <div class="card-middle">{getSuitSymbol(suit)}</div>
		        <div class="card-corner card-corner-bottom">
		            <span class="card-name">{name}</span>
		            <span class="card-suit">{getSuitSymbol(suit)}</span>
		        </div>
		    </div>
		    
		    <div class="face face-back">
		    </div>
		</div>
    )
}

const getCardClasses = suit => {
	let cardClasses = [
		'card'
	];

	if (suit === 'hearts' || suit === 'diamonds') {
		cardClasses.push('card-red');
	} else {
		cardClasses.push('card-black');
	}

	return cardClasses.join(' ');
}

const getSuitSymbol = suit => {
	const suitSymbols = {
		clubs: '♣',
		hearts: '♥',
		diamonds: '♦',
		spades: '♠',
	};

	return suitSymbols[suit];
}

export default Card;