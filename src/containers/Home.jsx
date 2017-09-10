import React, { Component } from 'react';
import { Grid, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import * as receiptActions from '../actions/receiptActions';
import * as pageActions from '../actions/paginationActions';
import StatsHolder from '../components/stats_holder';
import Header from '../components/header';
import ReceiptCard from '../components/card';
import Search from '../components/search';

class Home extends Component {
  handleAccept(receipt) {
    this.props.receiptActions.handleAccept(receipt);
  }

  handleAcceptClose() {
    this.props.receiptActions.handleAcceptClose();
  }

  confirmAccept() {
    this.props.receiptActions.confirmAccept(this.props.selectedReceipt);
  }

  handleReject(receipt) {
    this.props.receiptActions.handleReject(receipt);
  }

  handleRejectClose() {
    this.props.receiptActions.handleRejectClose();
  }

  confirmRejection() {
    this.props.receiptActions.confirmRejection(this.props.selectedReceipt);
  }

  handleDetails() {
    this.props.receiptActions.handleDetails();
  }

  handleDetailsClose() {
    this.props.receiptActions.handleDetailsClose();
  }

  showPending() {
    this.props.receiptActions.showPending();
  }

  componentWillMount() {
    this.props.receiptActions.getReceipts();
  }

  render() {
    const { receipt_stats, receipts_array, START, END } = this.props;
    const { nextPage, prevPage } = this.props.pageActions;
    const receipts = receipts_array.slice(START, END);

    let receiptCards;
    receiptCards = receipts.map((receipt, index) => (
        <Grid.Column width={4} key={index}>
          <ReceiptCard
              {...receipt}
              showAccept={this.props.showAccept}
              showReject={this.props.showReject}
              showDetails={this.props.showDetails}
              handleAccept={this.handleAccept.bind(this, receipt)}
              confirmAccept={this.confirmAccept.bind(this)}
              handleAcceptClose={this.handleAcceptClose.bind(this)}
              handleReject={this.handleReject.bind(this, receipt)}
              handleRejectClose={this.handleRejectClose.bind(this)}
              confirmRejection={this.confirmRejection.bind(this, receipt)}
              handleDetails={this.handleDetails.bind(this)}
              handleDetailsClose={this.handleDetailsClose.bind(this)}
          />
        </Grid.Column>
    ));

    return (
      <Grid className="full-height">
        <Grid.Column width={3} className="column1">
          <Grid.Row>
            <div className="logo">
              <p>AZERA</p>
            </div>
          </Grid.Row>
          <StatsHolder
              data={receipt_stats}
              showPending={this.showPending.bind(this)}
          />
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
              { receiptCards }
              <Grid.Column width={2} />
            </Grid>
          </Grid.Row>
          <Grid.Row className="padding-top">
            <Grid>
              <Grid.Column width={6} />
              <Grid.Column width={2}>
                <Icon
                  name="left arrow"
                  className="violet circular icon large inverted"
                  onClick={() => prevPage()}
                />
              </Grid.Column>
              <Grid.Column width={2}>
                <Icon
                  name="right arrow"
                  className="violet circular icon large inverted"
                  onClick={() => nextPage()}
                />
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
  const { START, END } = state.pages;
  const { receipts } = receipts_obj;
  const receipts_array = _.map(receipts, (val, uid) => (
    { ...val, uid }
  ));
  const receipt_stats = _.countBy(receipts, c => c.status);
  const showAccept = state.receipts.toJS().showAccept;
  const showReject = state.receipts.toJS().showReject;
  const showDetails = state.receipts.toJS().showDetails;
  const selectedReceipt = state.receipts.toJS().selectedReceipt;
  return {
    receipts_array,
    receipt_stats,
    showAccept,
    showReject,
    START,
    END,
    showDetails,
    selectedReceipt
  };
}

function mapDispatchToProps(dispatch) {
  return {
    receiptActions: bindActionCreators(receiptActions, dispatch),
    pageActions: bindActionCreators(pageActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
