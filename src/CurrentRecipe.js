import React from 'react';
import InstructionStep from './InstructionStep'
import {connect} from 'react-redux'
import { Item } from 'semantic-ui-react';

const CurrentRecipe = props => (
  <Item.Group divided>
    {props.currentRecipe.map((step, index) => <InstructionStep key={index} step={step}/>)}
  </Item.Group>
);

export default connect(state => ({currentRecipe: state.currentRecipe}))(CurrentRecipe);