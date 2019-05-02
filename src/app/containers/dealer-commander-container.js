import { connect } from 'react-redux';

import { requestCard, endTurn } from '../actions/player-actions';
import DealerCommander from '../components/dealer-commander.jsx';

const mapStateToProps = (store, ownProps) => {
    const { player, table } = store;

    return {
        id: table.players.find(player => player.isDealer).id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        triggerDealerHit: playerId => {
            dispatch(requestCard(playerId));
        },
        handleDealerStay: playerId => {
            dispatch(endTurn(playerId));
        }
    }
}

const withConnection = connect(
    mapStateToProps,
    mapDispatchToProps
);

export default withConnection(DealerCommander);
