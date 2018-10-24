export function logInPlayer(player) {
    return {
        type: 'LOG_IN_PLAYER',
        payload: player
    };
}

export function dealCards() {
    return {
        type: 'DEAL_CARDS'
    };
}

export function requestCard() {
    return {
        type: 'REQUEST_CARD'
    };
}
