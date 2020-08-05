import React from 'react';
import { connect } from 'react-redux';
import { Col } from 'react-bootstrap';
import RecipeSummary from './RecipeSummary';

class RecipesContainer extends React.Component {
  render() {
    return this.props.recipes ? (
        this.props.recipes.map((recipe, index) => (
          <Col xs={4} md={3}>
            <RecipeSummary key={index} recipe={recipe} />
          </Col>
        ))
      
    ) : (null);
  }
}

const mapStateToProps = state => {
  return { recipes: state.recipes };
};

export default connect(mapStateToProps)(RecipesContainer);
