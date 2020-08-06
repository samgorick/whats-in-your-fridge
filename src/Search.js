import React from 'react';
import { Formik } from 'formik'
import { Form, Button } from 'semantic-ui-react';

const Search = (props) => (
  <Formik initialValues={{ ingredients: '' }} onSubmit={values => props.handleSearch(values)}>
    {({ values, handleChange, handleBlur, handleSubmit }) => (
      <Form size="large" onSubmit={handleSubmit}>
          <Form.Input
            type='text'
            name='ingredients'
            placeholder="Separate ingredients by commas!"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.ingredients}
          />
        <Button fluid color="teal" type='submit' style={{marginBottom: 20}}>
          Get Recipes!
        </Button>
      </Form>
    )}
  </Formik>
);

export default Search;
