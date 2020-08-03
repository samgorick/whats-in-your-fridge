import { GET_RECIPES } from './Types'

const ENDPOINT = 'https://api.spoonacular.com/recipes/findByIngredients?apiKey=8eba26281c65412ab5d42b0dff17c3ae'

export function getRecipes(ingredients) {
  return dispatch => {
    fetch(`${ENDPOINT}&ingredients=${ingredients['ingredients']}`)
      .then(resp => resp.json())
      .then(recipes => {
        dispatch({ type: GET_RECIPES, recipes: recipes})
      });
  };
}