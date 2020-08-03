import React from 'react';
import LogoComponent from './LogoComponent';
import Search from './Search';
import RecipesContainer from './RecipesContainer'
import './App.css';
import { connect } from 'react-redux';
import { getRecipes } from './recipeActions';

class App extends React.Component {

  handleSearch = ingredients => {
    this.props.getRecipes(ingredients);
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <LogoComponent />
        </header>
          <Search handleSearch={this.handleSearch} />
          <RecipesContainer />
      </div>
    );
  }
}

export default connect(null, { getRecipes })(App);
