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
import ReceiptsHolder from '../components/receiptsHolder';

function viewReceipts(receipts) {
  return receipts.map(receipt => (
    <Grid.Column width={4}>
      <ReceiptCard {...receipt} />
    </Grid.Column>
  ));
}

class Home extends Component {
  componentWillMount() {
    this.props.receiptActions.getReceipts();
  }
  render() {
    const { receipt_stats, receipts_array } = this.props;
    console.log(typeof(receipts_array));
    console.log(receipts_array);
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
              {viewReceipts(receipts_array.slice(0, 3))}
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
  const receipts_array = _.map(receipts, (val, uid) => (
    { ...val, uid }
  ));
  const receipt_stats = _.countBy(receipts, c => c.status);
  return {
    receipts_array,
    receipt_stats,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    receiptActions: bindActionCreators(receiptActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
