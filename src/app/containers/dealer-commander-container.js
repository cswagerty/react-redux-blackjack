import { connect } from 'react-redux';

import { requestCard, endTurn } from '../actions/player-actions';
import DealerCommander from '../components/dealer-commander.jsx';

const mapStateToProps = (store, ownProps) => {
    const { player, table } = store;
    const dealer = table.players.find(player => player.isDealer);
    const { id, scores, status } = dealer;

    return {
        id: id,
        turnActive: status === 'TURN_ACTIVE',
        scores: scores
    }
}

const mapDispatchToProps = dispatch => {
    return {
        triggerDealerHit: playerId => {
            dispatch(requestCard(playerId));
        },
        triggerDealerStay: playerId => {
            dispatch(endTurn(playerId));
        }
    }
}

const withConnection = connect(
    mapStateToProps,
    mapDispatchToProps
);

export default withConnection(DealerCommander);
