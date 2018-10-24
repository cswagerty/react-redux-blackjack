import { connect } from 'react-redux';
import withVisibilityController from '../hocs/with-visibility-controller.jsx';

import LoginForm from '../components/login-form.jsx';
import { logInPlayer } from '../actions/player-actions.js';

const mapStateToProps = (store, ownProps) => {
    const { player, table } = store;
    return {
        visible: !player.loggedIn,
        players: table.players
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleLoginSubmit: (username, players) => {
            const newPlayer = {
                id: players.length,
                username: username
            };
            dispatch(logInPlayer(newPlayer));
        }
    }
}


const withConnection = connect(
    mapStateToProps,
    mapDispatchToProps
);

export default withConnection(withVisibilityController(LoginForm));
