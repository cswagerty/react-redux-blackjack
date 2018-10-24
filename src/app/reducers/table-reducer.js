import mapActionsToReducers from './reducer-utils.js';

const tableReducer = (state={status: 'BEFORE_CARDS_DEALT'}, action) => {
    const actionTypes = {
        DEAL_CARDS: handleDealCards,
        REQUEST_CARD: handleRequestCard
    };
    
    return mapActionsToReducers(actionTypes, action, state);
};

const handleDealCards = (state, action) => {
    let deck = createDeck();
    const dealtCards = dealCards(deck)
    return {
        ...state, 
        dealtCards: dealtCards, 
        deck: deck, 
        status: 'AFTER_CARDS_DEALT'
    }
};

const handleRequestCard = (state={}, action) => {
    const { deck, dealtCards } = state
    const dealtCard = dealCards(deck, 1)[0];
    return {...state, dealtCards: [...dealtCards, dealtCard], deck: deck}
};

const createDeck = () => {
    let deck = [];
    // create typical 52 card deck
    const cardNames = [
        'A',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        'J',
        'Q',
        'K'
    ];
    
    const cardSuits = ['clubs', 'hearts', 'diamonds', 'spades'];
    
    cardNames.forEach(cardName => {
        // create a card of each suit
        cardSuits.forEach(suit => deck.push({name: cardName, suit: suit}));
    });
    
    return deck;
};

const dealCards = (deck, numberOfCards=2) => {
    
    let dealtCards = [];
    
    for (var i=0; i < numberOfCards; i++) {
        // select a random index from available cards
        // then remove that card and add it to the dealt cards
        const randomIndex = Math.floor(Math.random() * deck.length)
        dealtCards.push(deck.splice(randomIndex, 1)[0])
    }
    return dealtCards;
}

export default tableReducer;
