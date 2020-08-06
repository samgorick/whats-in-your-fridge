import { GET_CURRENT_RECIPE } from './Types'

const ENDPOINT = 'https://api.spoonacular.com/recipes'

export function getCurrentRecipe(id) {
  return dispatch => {
    fetch(`${ENDPOINT}/${id}/analyzedInstructions?apiKey=8eba26281c65412ab5d42b0dff17c3ae`)
      .then(resp => resp.json())
      .then(recipe => {
        console.log(recipe[0].steps)
        dispatch({ type: GET_CURRENT_RECIPE, steps: recipe[0].steps})
      });
  };
}