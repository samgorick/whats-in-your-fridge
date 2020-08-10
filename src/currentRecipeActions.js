import { GET_CURRENT_RECIPE, RECIPE_NOT_FOUND } from './Types'

const ENDPOINT = 'https://api.spoonacular.com/recipes'

export function getCurrentRecipe(id, history) {
  return dispatch => {
    fetch(`${ENDPOINT}/${id}/analyzedInstructions?apiKey=8eba26281c65412ab5d42b0dff17c3ae`)
      .then(resp => resp.json())
      .then(recipe => {
        if (recipe.length > 0) {
          dispatch ({ type: GET_CURRENT_RECIPE, steps: recipe[0].steps}) 
          history.push(`/recipes/${id}`)
        } else{
          dispatch({ type: RECIPE_NOT_FOUND, error: {error: 'Sorry, that recipe could not be found, try another!'}}) 
          history.push('/recipes')
        }
      });
  };
}