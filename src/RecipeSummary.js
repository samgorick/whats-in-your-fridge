import React from 'react';
import { Card, Button, Image, List } from 'semantic-ui-react';

const RecipeSummary = props => (
  <Card>
    <Image src={props.recipe.image} />
    <Card.Content>
      <Card.Header>{props.recipe.title}</Card.Header>
    </Card.Content>
    <Card.Description textAlign='left' style={{ marginBottom: 10 }}>
      <strong>You already have:</strong>
      <List bulleted>
        {props.recipe.usedIngredients.map((ing, idx) => (
          <List.Item key={idx}>{ing.original}</List.Item>
        ))}
      </List>
    </Card.Description>
    <Card.Description textAlign='left' style={{ marginBottom: 10 }}>
      <strong>You'll need to get:</strong>
      <List bulleted>
        {props.recipe.missedIngredients.map((ing, idx) => (
          <List.Item key={idx}>{ing.original}</List.Item>
        ))}
      </List>
    </Card.Description>
    <Button attached='bottom' color='teal' onClick={() => props.getCurrentRecipe(props.recipe.id, props.history)}>
      See recipe
    </Button>
  </Card>
);

export default RecipeSummary;
