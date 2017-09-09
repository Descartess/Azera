import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

class Login extends Component {
    render() {
        return (
            <div className="login dark-primary-color">
                <span className="logo2">
                    AZERA
                </span>
                <Button basic color='teal' size='massive' onClick={this.props.handleGoogleLogin}>
                    Login/SignIn
                </Button>
            </div>
        );
    }
}

export default Login;