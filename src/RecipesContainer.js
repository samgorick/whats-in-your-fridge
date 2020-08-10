import React from 'react';
import { connect } from 'react-redux';
import RecipeSummary from './RecipeSummary';
import { getCurrentRecipe } from './currentRecipeActions';
import { Grid, Card } from 'semantic-ui-react';

class RecipesContainer extends React.Component {
  render() {
    return this.props.recipes ? (
      <Grid.Column width='14'>
        <Card.Group itemsPerRow={4} stackable>
          {this.props.recipes.map((recipe, index) => (
            <RecipeSummary key={index} recipe={recipe} getCurrentRecipe={this.props.getCurrentRecipe} />
          ))}
        </Card.Group>
      </Grid.Column>
    ) : null;
  }
}

const mapStateToProps = state => {
  return { recipes: state.recipes };
};

export default connect(mapStateToProps, { getCurrentRecipe })(RecipesContainer);
