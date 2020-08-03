import { GET_RECIPES } from './Types'

export default function recipeReducer(state = null, action){
  switch (action.type){
    case GET_RECIPES:
      return action.recipes

    default: 
      return state
  }
}