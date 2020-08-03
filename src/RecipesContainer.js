import React from 'react';
import { connect } from 'react-redux';
import { Carousel } from 'react-bootstrap';
import RecipeSummary from './RecipeSummary';

class RecipesContainer extends React.Component {
  render() {
    console.log(this.props)
    return this.props.recipes ? (
      <Carousel>
        {this.props.recipes.map((recipe, index) => (
          <RecipeSummary key={index} recipe={recipe} />
        ))}
      </Carousel>
    ) : (null);
  }
}

const mapStateToProps = state => {
  return { recipes: state.recipes };
};

export default connect(mapStateToProps)(RecipesContainer);
