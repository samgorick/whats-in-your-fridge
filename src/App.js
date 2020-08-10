import React from 'react';
import LogoComponent from './LogoComponent';
import Search from './Search';
import RecipesContainer from './RecipesContainer';
import CurrentRecipe from './CurrentRecipe';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';
import { getRecipes } from './recipeActions';
import { Grid } from 'semantic-ui-react';

class App extends React.Component {
  handleSearch = (ingredients, history) => {
    this.props.getRecipes(ingredients, history);
  };

  render() {
    return (
      <Router>
        <LogoComponent />
        <Grid textAlign='center' style={{ height: '100vh' }}>
          <Switch>
            <Route path='/recipes' component={RecipesContainer} />
            <Route path='/recipes/:id' component={CurrentRecipe} />
            <Route path='/' render={(props) => <Search {...props} handleSearch={this.handleSearch} />} />
          </Switch>
        </Grid>
      </Router>
    );
  }
}

export default connect(state => ({ currentRecipe: state.currentRecipe }), { getRecipes })(App);
