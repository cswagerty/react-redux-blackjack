import { connect } from 'react-redux';
import withVisibilityController from '../hocs/with-visibility-controller.jsx';

import Table from '../components/table.jsx';

const mapStateToProps = (store, ownProps) => {
    const { player } = store;
    return {
        visible: player.loggedIn
    }
}

const withConnection = connect(
    mapStateToProps
);

export default withConnection(withVisibilityController(Table));

