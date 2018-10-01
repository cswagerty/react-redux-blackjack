import { connect } from 'react-redux';

import PlayerInfo from '../components/player-info.jsx';
import { logInPlayer } from '../actions/player-actions.js';

const mapStateToProps = (store, ownProps) => {
    const { player } = store;
    return {
        showLoginForm: !player.loggedIn,
        username: player.username
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleLoginSubmit: username => {
            dispatch(logInPlayer(username));
        }
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PlayerInfo);

