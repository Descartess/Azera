import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import Stats from '../components/stats';
import Header from '../components/header';
import ReceiptCard from '../components/card';
import { Button } from 'semantic-ui-react';
import Search from './search';

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
                    <Header />
                    <Search />
                    <Grid.Row>
                        <div className="main-body">
                            <ReceiptCard />
                        </div>
                    </Grid.Row>
                </Grid.Column>
            </Grid>
        );
    }
}

export default Home;
