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
                <h2>Enter username to begin</h2>
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
        e.preventDefault();
        this.props.handleLoginSubmit(this.state.username);
    }
}

export default LoginForm;
