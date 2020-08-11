import { GET_CURRENT_RECIPE, RECIPE_NOT_FOUND } from './Types'

export default function currentRecipeReducer(state = null, action){
  switch (action.type){
    case GET_CURRENT_RECIPE:
      return action.recipe

    case RECIPE_NOT_FOUND:
      return action.error

    default: 
      return state
  }
}