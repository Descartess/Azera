import React, { Component } from 'react';
import { Grid, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import * as receiptActions from '../actions/receiptActions';
import StatsHolder from '../components/stats_holder';
import Header from '../components/header';
import ReceiptCard from '../components/card';
import Search from '../components/search';

class Home extends Component {
  componentWillMount() {
    this.props.receiptActions.getReceipts();
  }
  render() {
    // console.log(this.props.receipts);
    const { receipt_stats } = this.props;
    return (
      <Grid className="full-height">
        <Grid.Column width={3} className="column1">
          <Grid.Row>
            <div className="logo">
              <p>AZERA</p>
            </div>
          </Grid.Row>
          <StatsHolder data={receipt_stats} />
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
              <Grid.Column width={2} />
              <Grid.Column width={4}>
                <ReceiptCard />
              </Grid.Column>
              <Grid.Column width={4}>
                <ReceiptCard />
              </Grid.Column>
              <Grid.Column width={4}>
                <ReceiptCard />
              </Grid.Column>
              <Grid.Column width={2} />
            </Grid>
          </Grid.Row>
          <Grid.Row className="padding-top">
            <Grid>
              <Grid.Column width={6} />
              <Grid.Column width={2}>
                <Icon name="left arrow" className="violet circular icon large inverted" />
              </Grid.Column>
              <Grid.Column width={2}>
                <Icon name="right arrow" className="violet circular icon large inverted" />
              </Grid.Column>
              <Grid.Column width={6} />
            </Grid>
          </Grid.Row>
        </Grid.Column>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  const receipts_obj = state.receipts.toJS();
  const { receipts } = receipts_obj;
  const receipt_stats = _.countBy(receipts, c => c.status);
  return {
    receipts,
    receipt_stats,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    receiptActions: bindActionCreators(receiptActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
