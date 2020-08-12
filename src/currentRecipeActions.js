import { GET_CURRENT_RECIPE, RECIPE_NOT_FOUND } from './Types'

const API_KEY = process.env.REACT_APP_API_KEY

const ENDPOINT = 'https://api.spoonacular.com/recipes'

export function getCurrentRecipe(id, history) {
  return dispatch => {
    fetch(`${ENDPOINT}/${id}/information?apiKey=${API_KEY}`)
      .then(resp => resp.json())
      .then(recipe => {
        if (recipe) {
          dispatch ({ type: GET_CURRENT_RECIPE, recipe: recipe}) 
          history.push(`/recipes/${id}`)
        } else{
          dispatch({ type: RECIPE_NOT_FOUND, error: {error: 'Sorry, that recipe could not be found, try another!'}}) 
          history.push('/recipes')
        }
      });
  };
}