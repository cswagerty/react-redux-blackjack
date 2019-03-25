import { connect } from 'react-redux';
import withVisibilityController from '../hocs/with-visibility-controller.jsx';

import PlayerResults from '../components/player-results.jsx';

const mapStateToProps = (store, ownProps) => {
    const { player, table } = store;

    const visibleStatuses = ['AFTER_CARDS_DEALT'];
    const players = [...table.players];
    const currentPlayerId = player.id;
    const currentPlayer = players.find(player => player.id === currentPlayerId);

    return {
        visible: visibleStatuses.includes(table.status),
        score: formatScores(currentPlayer.scores),
        status: getHandStatus(currentPlayer.scores, currentPlayer.cards)
    }
}

const getHandStatus = (scores=[], cards) => {
    if (scores.includes(21)) {
        return cards.length === 2 ? 'BlackJack!' : '21!';
    }

    if (scores.some(score => score > 21)) {
        return 'BUST!'
    }

    return null;
}

const formatScores = (scores=[]) => {
    // If a hand has an ace output possible scores separated by a / 
    // i.e. A, 3 => "4/14"
    return scores.join('/');
}

const withConnection = connect(
    mapStateToProps
);

export default withConnection(withVisibilityController(PlayerResults));

