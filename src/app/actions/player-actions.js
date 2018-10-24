export function logInPlayer(username) {
    return {
        type: 'LOGGED_IN',
        payload: username
    };
}

export function dealCards() {
    return {
        type: 'DEAL_CARDS'
    };
}
