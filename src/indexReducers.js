import { combineReducers } from 'redux';
import recipeReducer from './recipeReducer'
import currentRecipeReducer from './currentRecipeReducer'

const rootReducer = combineReducers({
  recipes: recipeReducer,
  currentRecipe: currentRecipeReducer
});

export default rootReducer;