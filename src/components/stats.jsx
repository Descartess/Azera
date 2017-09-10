import React from 'react';
import { Statistic } from 'semantic-ui-react';

const Stats = props => (
  <div className="stats pointer">
    <Statistic value={props.value || 0} label={props.label} />
  </div>
);

export default Stats;
