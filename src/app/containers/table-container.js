import { connect } from 'react-redux';

import Table from '../components/table.jsx';

const mapStateToProps = (store, ownProps) => {
    const { player } = store;
    return {
        visible: player.loggedIn
    }
}

export default connect(
    mapStateToProps
)(Table);

