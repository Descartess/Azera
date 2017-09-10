import React, { Component } from 'react';
import { Grid, Icon } from 'semantic-ui-react';
import Stats from '../components/stats';
import Header from '../components/header';
import ReceiptCard from '../components/card';
import Search from '../components/search';

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
                    <Grid.Row>
                        <Header
                            currentUser={this.props.currentUser}
                            handleLogout={this.props.handleLogout}
                        />
                    </Grid.Row>
                    <Grid.Row>
                        <Search />
                    </Grid.Row>
                    <Grid.Row className="padding-top">
                        <Grid>
                            <Grid.Column width={2}/>
                            <Grid.Column width={4}>
                                <ReceiptCard />
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <ReceiptCard />
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <ReceiptCard />
                            </Grid.Column>
                            <Grid.Column width={2}/>
                        </Grid>
                    </Grid.Row>
                    <Grid.Row className="padding-top">
                        <Grid>
                            <Grid.Column width={6}/>
                            <Grid.Column width={2}>
                                <Icon name="left arrow" className="violet circular icon large inverted"/>
                            </Grid.Column>
                            <Grid.Column width={2}>
                                <Icon name="right arrow" className="violet circular icon large inverted"/>
                            </Grid.Column>
                            <Grid.Column width={6}/>
                        </Grid>
                    </Grid.Row>
                </Grid.Column>
            </Grid>
        );
    }
}

export default Home;
