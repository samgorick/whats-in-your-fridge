import React from 'react';
import { connect } from 'react-redux';
import {Row, Col, Container } from 'react-bootstrap';
import RecipeSummary from './RecipeSummary';

class RecipesContainer extends React.Component {
  render() {
    return this.props.recipes ? (
      <Container>
        <Row>
        {this.props.recipes.map((recipe, index) => (
          <Col xs={4} md={3}>
            <RecipeSummary key={index} recipe={recipe} />
          </Col>
        ))}
      </Row>
      </Container>
      
    ) : (null);
  }
}

const mapStateToProps = state => {
  return { recipes: state.recipes };
};

export default connect(mapStateToProps)(RecipesContainer);
