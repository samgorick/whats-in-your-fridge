import React from 'react';
import { Formik } from 'formik';
import { Grid, Form, Button } from 'semantic-ui-react';

const Search = props => (
  <Formik initialValues={{ ingredients: '' }} onSubmit={values => props.handleSearch(values, props.history)}>
    {({ values, handleChange, handleBlur, handleSubmit }) => (
      <Grid.Column width='6'>
        <Form size='large' onSubmit={handleSubmit}>
          <Form.Input
            type='text'
            name='ingredients'
            placeholder='Separate ingredients by commas!'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.ingredients}
          />
          <Button fluid type='submit' style={{ marginBottom: 20, backgroundColor: '#7D1D3F', color: 'white' }}>
            Get Recipes!
          </Button>
        </Form>
      </Grid.Column>
    )}
  </Formik>
);

export default Search;
