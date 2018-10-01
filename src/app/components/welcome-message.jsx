import React, { Component } from 'react';

class PlayerMessage extends Component {
    render() {
        return <h2>{this.getPlayerInfoText(this.props.username)}</h2>
    }
    
    getPlayerInfoText(username) {
        const defaultMessage = 'Please enter username...'
        
        // show welcome message if user hasn't entered a username
        return username ? `Welcome ${username}!` : defaultMessage;
    }
}

export default PlayerMessage;
