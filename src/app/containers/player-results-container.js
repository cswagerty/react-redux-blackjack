import { connect } from 'react-redux';
import withVisibilityController from '../hocs/with-visibility-controller.jsx';

import PlayerResults from '../components/player-results.jsx';

const mapStateToProps = (store, ownProps) => {
    const { table } = store;
    const { playerId } = ownProps;

    const visibleStatuses = ['AFTER_CARDS_DEALT', 'ALL_TURNS_COMPLETE'];
    const player = table.players.find(player => player.id === playerId);
    const { scores, cards, status } = player;

    return {
        visible: visibleStatuses.includes(table.status),
        score: formatScores(scores, status),
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

const formatScores = (scores=[], status) => {
    // If a hand has an ace output possible scores separated by a / 
    // i.e. A, 3 => "4/14"
    
    // If turn is over, only display the highest score
    if (status === 'TURN_COMPLETED') {
        scores = [ getMaxValue(scores) ];
    }

    return scores.join('/');
}

const getMaxValue = arr => {
    return arr.reduce((accValue, value) => value > accValue ? value : accValue, 0);
}

const withConnection = connect(
    mapStateToProps
);

export default withConnection(withVisibilityController(PlayerResults));

