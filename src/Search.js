import React from 'react';
import { Formik } from 'formik'
import { Form, Button } from 'react-bootstrap';

const Search = (props) => (
  <Formik initialValues={{ ingredients: '' }} onSubmit={values => props.handleSearch(values)}>
    {({ values, handleChange, handleBlur, handleSubmit }) => (
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId='formBasicRecipeSearch'>
          <Form.Control
            type='text'
            name='ingredients'
            placeholder="Separate ingredients by commas!"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.ingredients}
          />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Get Recipes!
        </Button>
      </Form>
    )}
  </Formik>
);

export default Search;
