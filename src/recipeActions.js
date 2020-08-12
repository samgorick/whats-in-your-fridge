import { GET_RECIPES } from './Types';

const API_KEY = process.env.REACT_APP_API_KEY

const ENDPOINT = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${API_KEY}`;

export function getRecipes(ingredients, history) {
  return dispatch => {
    fetch(`${ENDPOINT}&ingredients=${ingredients['ingredients']}&number=8`)
      .then(resp => resp.json())
      .then(recipes => {
        dispatch({ type: GET_RECIPES, recipes: recipes });
        history.push('/recipes');
      });
  };
}
