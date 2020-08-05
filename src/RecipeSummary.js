import React from 'react';
import { Card, Button } from 'react-bootstrap';

const RecipeSummary = props => (
  <Card bg={'light'} text={'dark'} style={{ height: '100%', marginBottom: 15 }}>
    <Card.Img variant='top' src={props.recipe.image} />
    <Card.Header>{props.recipe.title}</Card.Header>
    <Card.Body>
      <Card.Text>Ingredients</Card.Text>
      {props.recipe.usedIngredients.map(ing => (
        <Card.Text>{ing.original}</Card.Text>
      ))}
      {props.recipe.missedIngredients.map(ing => (
        <Card.Text>{ing.original}</Card.Text>
      ))}
    </Card.Body>
    <Card.Footer>
      <Button variant='primary'>See recipe</Button>
    </Card.Footer>
  </Card>
);

export default RecipeSummary;
