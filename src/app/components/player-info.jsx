import React, { Component } from 'react';

import WelcomeMessage from './welcome-message.jsx';
import LoginForm from './login-form.jsx';

class PlayerInfo extends Component {
    
    handleLoginSubmit = username => {
        this.props.handleLoginSubmit(username); 
    }
    
    render() {
        const { showLoginForm, username, handleLoginSubmit } = this.props;

        return (
            <section className="player-info">
                <WelcomeMessage username={username} />
                <LoginForm visible={showLoginForm} handleLoginSubmit={this.handleLoginSubmit} />
            </section>
        );
    }
}

export default PlayerInfo;