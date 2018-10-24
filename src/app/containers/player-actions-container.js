import { connect } from 'react-redux';
import withVisibilityController from '../hocs/with-visibility-controller.jsx';

import { dealCards } from '../actions/player-actions';
import PlayerActions from '../components/player-actions.jsx';

const mapStateToProps = (store, ownProps) => {
    const { player, table } = store;
    return {
        visible: player.loggedIn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleDealClick: () => {
            dispatch(dealCards());
        }
    }
}

const withConnection = connect(
    mapStateToProps,
    mapDispatchToProps
);

export default withConnection(withVisibilityController(PlayerActions));
