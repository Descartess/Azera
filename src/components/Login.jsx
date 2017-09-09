import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

class Login extends Component {
    render() {
        return (
            <Button onClick={this.props.handleGoogleLogin}>Login/SignIn</Button>
        );
    }
}

export default Login;