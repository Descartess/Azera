import React from 'react';
import { Button } from 'semantic-ui-react';

const Login = (props) => (
    <div className="login dark-primary-color">
        <span className="logo">
            AZERA
        </span>
        <Button basic color='teal' size='massive' onClick={props.handleGoogleLogin}>
            Login/SignIn
        </Button>
    </div>
);

export default Login;