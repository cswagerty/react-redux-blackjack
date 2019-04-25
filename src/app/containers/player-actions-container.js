import { connect } from 'react-redux';
import withVisibilityController from '../hocs/with-visibility-controller.jsx';

import { dealCards, requestCard, endTurn, resetTable } from '../actions/player-actions';
import PlayerActions from '../components/player-actions.jsx';

const mapStateToProps = (store, ownProps) => {
    const { player, table } = store;

    return {
        visible: player.loggedIn,
        playerId: player.id,
        actionButtons: buildActionButtons(table.players)
    }
}

const buildActionButtons = players => {
    const actions = getActions(players);

    const actionButtons = actions.map(action => {
        return {
            text: action,
            handlerName: `handle${action}Click`
        }
    });

    return actionButtons;
}

const getActions = players => {
    // Determine which player actions are available
    // based on the the player's status

    const player = players.find(player => !player.isDealer);
    const dealer = players.find(player => player.isDealer);

    if (player.status === "TURN_PENDING") {
        return ['Deal'];
    }

    if (player.status === "TURN_ACTIVE") {
        return ['Hit', 'Stay'];
    }

    if (dealer.status === "TURN_ACTIVE") {
        // It is the dealer's turn so player has no action buttons
        return [];
    }

    if (dealer.status === "TURN_COMPLETED") {
        // It is the dealer's turn so player has no action buttons
        return ['Reset'];
    }
}

const mapDispatchToProps = dispatch => {
    return {
        clickHandlers: {
            handleDealClick: playerId => {
                dispatch(dealCards(playerId));
            },
            handleHitClick: playerId => {
                dispatch(requestCard(playerId));
            },
            handleStayClick: playerId => {
                dispatch(endTurn(playerId));
            },
            handleResetClick: () => {
                dispatch(resetTable());
            }
        }
    }
}

const withConnection = connect(
    mapStateToProps,
    mapDispatchToProps
);

export default withConnection(withVisibilityController(PlayerActions));
