import { connect } from 'react-redux';

import LoginForm from '../components/login-form.jsx';
import { logInPlayer } from '../actions/player-actions.js';

const mapStateToProps = (store, ownProps) => {
    const { player } = store;
    return {
        visible: !player.loggedIn
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
)(LoginForm);

