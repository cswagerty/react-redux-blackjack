export function logInPlayer(player) {
    return {
        type: 'LOG_IN_PLAYER',
        payload: player
    };
}

export function dealCards(playerId) {
    return {
        type: 'DEAL_CARDS',
        payload: playerId
    };
}

export function requestCard(playerId) {
    return {
        type: 'REQUEST_CARD',
        payload: playerId
    };
}

export function endTurn(playerId) {
    return {
        type: 'END_TURN',
        payload: playerId
    };
}

export function resetTable() {
    return {
        type: 'RESET_TABLE'
    };
}
