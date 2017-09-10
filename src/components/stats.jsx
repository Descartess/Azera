import React from 'react';
import { Statistic } from 'semantic-ui-react';

const Stats = props => (
  <div className="stats">
    <Statistic value={props.value} label= {props.label} />
  </div>
);

export default Stats;
