import { connect } from 'react-redux';

import PlayerInfo from '../components/player-info.jsx';

const mapStateToProps = (store, ownProps) => {
    const { player } = store;
    return {
        visible: player.loggedIn,
        username: player.username
    }
}

export default connect(
    mapStateToProps
)(PlayerInfo);

