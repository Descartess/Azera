import React from 'react';
import _ from 'lodash';
import Stats from './stats';

const StatsHolder = (props) => {
  if (_.isEmpty(props.data)) {
    return <p className="left-bar"> Statistics Unavailable </p>;
  }
  return (
    <div className="left-bar">
      <Stats value={props.data.accepted} label={'Accepted'} />
      <Stats value={props.data.pending} label={'Pending'} />
      <Stats value={props.data.rejected} label={'Rejected'} />
    </div>
  );
};
export default StatsHolder;
