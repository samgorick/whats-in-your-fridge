import React from 'react';
import { List } from 'semantic-ui-react';

const InstructionStep = props => <List.Item>{props.step.step}</List.Item>;

export default InstructionStep;
