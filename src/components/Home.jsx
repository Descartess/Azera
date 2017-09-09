import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import Stats from '../components/stats';
import HeaderBar from '../components/header';
import ReceiptCard from '../components/card';
import { Button } from 'semantic-ui-react';

class Home extends Component {
    render() {
        return (
            <Grid className="full-height">
                <Grid.Column width={3} className="column1">
                    <Grid.Row>
                        <div className="logo">
                            <p>AZERA</p>
                        </div>
                    </Grid.Row>
                    <div className="left-bar">
                        <Stats />
                        <Stats />
                        <Stats />
                    </div>
                </Grid.Column >
                <Grid.Column width={13} className="column2">
                    <HeaderBar />
                    <Grid.Row>
                        <div className="main-body">
                            <ReceiptCard />
                            <Button onClick={this.props.handleLogout}>Logout</Button>
                        </div>
                    </Grid.Row>
                </Grid.Column>
            </Grid>
        );
    }
}

export default Home;
