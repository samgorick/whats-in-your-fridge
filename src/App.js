import React from 'react';
import LogoComponent from './LogoComponent';
import Search from './Search';
import RecipesContainer from './RecipesContainer'
import CurrentRecipe from './CurrentRecipe'
import './App.css';
import { connect } from 'react-redux';
import { getRecipes } from './recipeActions';
import { Container, Grid, CardGroup } from 'semantic-ui-react'

class App extends React.Component {

  handleSearch = ingredients => {
    this.props.getRecipes(ingredients);
  }

  render() {
    return (
      <div>
        <LogoComponent />
        <Grid textAlign='center' style={{ height: '100vh' }} >
          <Grid.Column width="4">
            <Search handleSearch={this.handleSearch} />
          </Grid.Column>
          <Grid.Row>
          {this.props.currentRecipe ? (
            <CurrentRecipe />
          ) : (
            <CardGroup>
              <RecipesContainer />
            </CardGroup>
          )}
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default connect(state => ({currentRecipe: state.currentRecipe}), { getRecipes })(App);
