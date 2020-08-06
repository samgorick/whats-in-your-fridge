import React from 'react';
import { Item } from 'semantic-ui-react';

const InstructionStep = props => (
  <Item>
    <Item.Content style={{color: 'white'}} verticalAlign='middle'>{props.step.step}</Item.Content>
  </Item>
);

export default InstructionStep;