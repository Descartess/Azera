import React from 'react';
import { Grid } from 'semantic-ui-react';
import _ from 'lodash';

import ReceiptCard from './card';

function viewReceipts(receipts) {
  return receipts.map(receipt => (
    <Grid.Column width={4}>
      <ReceiptCard {...receipt} />
    </Grid.Column>
  ));
}

const ReceiptsHolder = (props) => {
  const { receipts } = props;
  if (_.isEmpty(props.receipts)) {
    return (
      <p> No submitted receipts </p>
    );
  }
  return (
    <div>
      {viewReceipts(receipts.slice(0, 3))}
    </div>
  );
};

export default ReceiptsHolder;
