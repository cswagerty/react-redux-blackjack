import React, { Component } from 'react';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            username: ''
        }
    }
    
    render() {
        
        return (
            <section className="player-login-form">
                <h1>React/Redux Blackjack v0.0.1</h1>
                <p>Enter a username to begin</p>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" 
                        value={this.state.username} 
                        placeholder="Enter username"
                        onChange={this.handleUsernameChange}
                    />
                    <input type="submit" value="Login" />
                </form>
            </section>
        );
    }
    
    handleUsernameChange = e => {
        this.setState({username: e.target.value});
    }
    
    handleSubmit = e => {
        const { username } = this.state;
        const { handleLoginSubmit, players } = this.props
        e.preventDefault();
        handleLoginSubmit(username, players);
    }
}

export default LoginForm;
