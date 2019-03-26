import { connect } from 'react-redux';
import withVisibilityController from '../hocs/with-visibility-controller.jsx';

import { dealCards, requestCard, endTurn, resetTable } from '../actions/player-actions';
import PlayerActions from '../components/player-actions.jsx';

const mapStateToProps = (store, ownProps) => {
    const { player, table } = store;

    return {
        visible: player.loggedIn,
        playerId: player.id,
        actionButtons: buildActionButtons(table.status)
    }
}

const buildActionButtons = tableStatus => {
    const actions = getActions(tableStatus);

    const actionButtons = actions.map(action => {
        return {
            text: action,
            handlerName: `handle${action}Click`
        }
    });

    return actionButtons;
}

const getActions = tableStatus => {
    // Determine which player actions are available
    // based on what the game's status
    const actions = {
        BEFORE_CARDS_DEALT: ['Deal'],
        AFTER_CARDS_DEALT: ['Hit', 'Stay'],
        ALL_TURNS_COMPLETE: ['Reset']
    };

    return actions[tableStatus];
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
