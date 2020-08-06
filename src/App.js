import React from 'react';
import LogoComponent from './LogoComponent';
import Search from './Search';
import RecipesContainer from './RecipesContainer'
import CurrentRecipe from './CurrentRecipe'
import './App.css';
import { connect } from 'react-redux';
import { getRecipes } from './recipeActions';
import { Container, Row, Col, CardGroup } from 'react-bootstrap'

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
        <Container>
          <Row>
            <Col>
              <Search handleSearch={this.handleSearch} />
            </Col>
          </Row>
          <Row>
          {this.props.currentRecipe ? (
            <CurrentRecipe />
          ) : (
            <CardGroup>
              <RecipesContainer />
            </CardGroup>
          )}
          </Row>
        </Container>
      </div>
    );
  }
}

export default connect(state => ({currentRecipe: state.currentRecipe}), { getRecipes })(App);
