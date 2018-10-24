import { connect } from 'react-redux';
import withVisibilityController from '../hocs/with-visibility-controller.jsx';

import Table from '../components/table.jsx';

const mapStateToProps = (store, ownProps) => {
    const { player, table } = store;
    const activePlayer = table.players.find(tablePlayer => tablePlayer.id === player.id);
    let dealtCards = [];

    if (activePlayer) {
    	dealtCards = activePlayer.cards;
    }

    return {
        visible: player.loggedIn,
        deck: table.deck,
        dealtCards: dealtCards
    }
}

const withConnection = connect(
    mapStateToProps
);

export default withConnection(withVisibilityController(Table));

