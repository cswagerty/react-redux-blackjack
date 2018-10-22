import { connect } from 'react-redux';
import withVisibilityController from '../hocs/with-visibility-controller.jsx';

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


const withConnection = connect(
    mapStateToProps,
    mapDispatchToProps
);

export default withConnection(withVisibilityController(LoginForm));
