import React from 'react';
import { Card, Button, Image } from 'semantic-ui-react';

const RecipeSummary = props => (
  <Card>
    <Image src={props.recipe.image} />
    <Card.Content>
      <Card.Header>{props.recipe.title}</Card.Header>
    </Card.Content>
    <Card.Description>
      You already have:
      {props.recipe.usedIngredients.map(ing => (
        ing.original
      ))}
    </Card.Description>
    <Card.Description>
      You'll need to get:
      {props.recipe.missedIngredients.map(ing => (
        ing.original
      ))}
    </Card.Description>
      <Button attached="bottom" color="teal" onClick={() => props.getCurrentRecipe(props.recipe.id)}>See recipe</Button>
  </Card>
);

export default RecipeSummary;