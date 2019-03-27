import { connect } from 'react-redux';
import withVisibilityController from '../hocs/with-visibility-controller.jsx';

import Player from '../components/player.jsx';

const mapStateToProps = (store, ownProps) => {
    const { id } = ownProps;
    const { table, player } = store;
    const tablePlayer = table.players.find(player => player.id === id);
    const playerClasses = getPlayerClasses(tablePlayer, player);

    return {
        id: id,
        playerClasses: playerClasses
    }
}

const getPlayerClasses = (player, userPlayer) => {
    // determine which classes should be added to this player depending
    // on if this player is the current user or the dealer
    let playerClasses = [];

    if (player.isDealer) {
        playerClasses.push('player-dealer');
    }

    if (player.id === userPlayer.id) {
        playerClasses.push('player-user');
    }

    return playerClasses.join(' ');
}

const withConnection = connect(
    mapStateToProps
);

export default withConnection(withVisibilityController(Player));

