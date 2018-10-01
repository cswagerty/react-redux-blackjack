import React, { Component } from 'react';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            username: ''
        }
    }
    
    render() {
        const { visible, username } = this.props
        if (this.props.visible === false) {
            return null;
        }
        
        return (
            <form className="player-info-form" onSubmit={this.handleSubmit}>
                <input type="text" 
                    value={this.state.username} 
                    placeholder="Enter username"
                    onChange={this.handleUsernameChange}
                />
                <input type="submit" value="Login" />
            </form>
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
