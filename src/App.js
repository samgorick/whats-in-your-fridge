import React from 'react';
import LogoComponent from './LogoComponent';
import Search from './Search';
import RecipesContainer from './RecipesContainer';
import CurrentRecipe from './CurrentRecipe';
import './App.css';
import { connect } from 'react-redux';
import { getRecipes } from './recipeActions';
import {Grid, Card } from 'semantic-ui-react';

class App extends React.Component {
  handleSearch = ingredients => {
    this.props.getRecipes(ingredients);
  };

  render() {
    return (
      <div>
        <LogoComponent />
        <Grid textAlign='center' style={{ height: '100vh' }}>
          <Grid.Column width='4'>
            <Search handleSearch={this.handleSearch} />
          </Grid.Column>
          <Grid.Column width='14'>
            {this.props.currentRecipe ? (
              <CurrentRecipe />
            ) : (
              <Card.Group itemsPerRow={4} stackable>
                <RecipesContainer />
              </Card.Group>
            )}
            </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default connect(state => ({ currentRecipe: state.currentRecipe }), { getRecipes })(App);
