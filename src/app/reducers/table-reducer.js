import mapActionsToReducers from './reducer-utils.js';
import { getScoresFromCards } from '../utils/scoring-utils.js';

const initialTableState = {
    status: 'BEFORE_CARDS_DEALT',
    players: []
};

const initialPlayerState = {
    cards: [],
    scores: [],
    status: 'TURN_PENDING'
};

const tableReducer = (state=initialTableState, action) => {
    const actionTypes = {
        LOG_IN_PLAYER: handlePlayerLogin,
        DEAL_CARDS: handleDealCards,
        REQUEST_CARD: handleRequestCard,
        END_TURN: handleEndTurn,
        RESET_TABLE:  handleResetTable
    };
    
    return mapActionsToReducers(actionTypes, action, state);
};

const handlePlayerLogin = (state, action) => {
    const newPlayerId = action.payload.id;
    let players = addPlayer(state.players, newPlayerId);

    if (!hasDealer(players)) {
        const dealerId = players.length;
        players = addPlayer(players, dealerId, true);
    }

    return {...state, players: players}
}

const addPlayer = (players, newPlayerId, isDealer=false) => {
    return players.concat({
        ...initialPlayerState,
        id: newPlayerId,
        isDealer: isDealer
    });
}

const hasDealer = players => {
    return players.filter(player => player.isDealer).length !== 0;
}

const handleDealCards = (state, action) => {
    let { players } = state;
    let deck = createDeck();

    players = players.map(player => {
        const dealtCards = dealCards(deck);
        return {
            ...player,
            cards: dealtCards,
            scores: getScoresFromCards(dealtCards),
            status: getPlayerStatus(player)
        };
    });    

    return {
        ...state, 
        players: players, 
        deck: deck, 
        status: 'AFTER_CARDS_DEALT'
    }
};

const getPlayerStatus= player => {
    if (player.scores.some(score => score >= 21)) {
        return 'TURN_COMPLETED';
    }

    // if no blackjacks, it is the players turn
    return !player.isDealer ? 'TURN_ACTIVE' : 'TURN_PENDING'
}

const handleRequestCard = (state={}, action) => {
    let { deck, players, status } = state;
    const dealtCards = dealCards(deck, 1);
    const playerId = action.payload;
    let activePlayer = players.find(player => player.id === playerId);
    activePlayer.cards = [...activePlayer.cards, ...dealtCards];
    activePlayer.scores = getScoresFromCards(activePlayer.cards);
    players = updateTurnStatus(activePlayer, players);


    return {
        ...state, 
        players: players, 
        deck: deck,
        status: status
    }
};

const updateTurnStatus = (activePlayer, players) => {
   
    if (activePlayer.scores.some(score => score >= 21)) {
        // if player busts or draws to 21, their turn 
        activePlayer.status = 'TURN_COMPLETED';

        if (activePlayer.isDealer) {
            return players;
        }

        // if user player has completed turn, set the dealers turn to active
        const dealer = players.find(player => player.isDealer);
        dealer.status = 'TURN_ACTIVE';
    }

    return players;
}

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

const handleEndTurn = (state, action) => {
    // update table and player status when
    // turn is complete
    let { deck, players, status } = state;
    const playerId = action.payload;
    let player = players.find(player => player.id === playerId);
    player.status = 'TURN_COMPLETED';

    if (!player.isDealer) {
        // if this is the user ends their turn, it is now the dealer's turn
        const dealer = players.find(player => player.isDealer);
        dealer.status = 'TURN_ACTIVE';
    }
    
    return {
        ...state, 
        players: players,
        status: status
    };
}

const handleResetTable = (state, action) => {
    let { deck, players } = state;

    players = resetPlayersToInitialState(players);

    return {
        ...state,
        deck: [],
        status: 'BEFORE_CARDS_DEALT',
        players: players
    };
}

const resetPlayersToInitialState = players => {
    return players.map(player => Object.assign(player, initialPlayerState));
};

export default tableReducer;
