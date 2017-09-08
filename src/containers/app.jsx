import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Grid>
        <Grid.Column width={2}>
          <p>Left Panel</p>
        </Grid.Column>
        <Grid.Column width={14}>
          <p>Right Panel</p>
        </Grid.Column>
      </Grid>
    );
  }
}

export default App;
