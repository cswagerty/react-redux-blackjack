import { connect } from 'react-redux';
import withVisibilityController from '../hocs/with-visibility-controller.jsx';

import PlayerResults from '../components/player-results.jsx';

const mapStateToProps = (store, ownProps) => {
    const { table } = store;
    const { playerId } = ownProps;

    const visibleStatuses = ['AFTER_CARDS_DEALT', 'ALL_TURNS_COMPLETE'];
    const player = table.players.find(player => player.id === playerId);
    const { scores, cards } = player;

    return {
        visible: visibleStatuses.includes(table.status),
        score: formatScores(scores),
        status: getHandStatus(scores, cards)
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

