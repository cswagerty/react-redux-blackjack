import { connect } from 'react-redux';
import withVisibilityController from '../hocs/with-visibility-controller.jsx';

import PlayerInfo from '../components/player-info.jsx';

const mapStateToProps = (store, ownProps) => {
    const { player } = store;
    return {
        visible: player.loggedIn,
        username: player.username
    }
}

const withConnection = connect(
    mapStateToProps
);

export default withConnection(withVisibilityController(PlayerInfo));
