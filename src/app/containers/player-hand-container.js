import { connect } from 'react-redux';
import withVisibilityController from '../hocs/with-visibility-controller.jsx';

import PlayerHand from '../components/player-hand.jsx';

const mapStateToProps = (store, ownProps) => {
    const { table } = store;
    const { playerId } = ownProps;

    const player = table.players.find(player => player.id === playerId);

    return {
        cards: player.cards
    }
}

const withConnection = connect(
    mapStateToProps
);

export default withConnection(withVisibilityController(PlayerHand));

