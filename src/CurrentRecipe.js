import React from 'react';
import InstructionStep from './InstructionStep';
import { connect } from 'react-redux';
import { Grid, List } from 'semantic-ui-react';

const CurrentRecipe = props => (
  <Grid width={14}>
    <Grid.Column width={7}>Nothing yet</Grid.Column>
    <Grid.Column width={7}>
      <List ordered divided size='large' style={{ textAlign: 'left' }}>
        {props.currentRecipe.map((step, index) => (
          <InstructionStep key={index} step={step} />
        ))}
      </List>
    </Grid.Column>
  </Grid>
);

export default connect(state => ({ currentRecipe: state.currentRecipe }))(CurrentRecipe);
