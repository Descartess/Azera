import React from 'react';
import _ from 'lodash';
import Stats from './stats';

const StatsHolder = (props) => {
  if (_.isEmpty(props.data)) {
    return <p className="left-bar"> Statistics Unavailable </p>;
  }
  return (
    <div className="left-bar">
      <a onClick={props.showPending}>
          <Stats value={props.data.pending} label={'Pending'}/>
      </a>
      <a onClick={props.showAccepted}>
          <Stats value={props.data.accepted} label={'Accepted'}/>
      </a>
      <a onClick={props.showRejected}>
          <Stats value={props.data.rejected} label={'Rejected'}/>
      </a>
    </div>
  );
};
export default StatsHolder;
