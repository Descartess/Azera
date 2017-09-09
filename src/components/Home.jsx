import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

class Home extends Component {
    render() {
        return (
            <div>
                <h2>You have logged in successfully</h2>
                <Button onClick={this.props.handleLogout}>Logout</Button>
            </div>
        );
    }
}

export default Home;