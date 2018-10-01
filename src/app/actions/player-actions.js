export function logInPlayer(username) {
    return {
        type: 'LOGGED_IN',
        payload: username
    };
}
