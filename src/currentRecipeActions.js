import { GET_CURRENT_RECIPE, RECIPE_NOT_FOUND } from './Types'

const ENDPOINT = 'https://api.spoonacular.com/recipes'

export function getCurrentRecipe(id, history) {
  return dispatch => {
    console.log(id)
    fetch(`${ENDPOINT}/${id}/information?apiKey=8eba26281c65412ab5d42b0dff17c3ae`)
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