import { GET_CURRENT_RECIPE } from './Types'

export default function currentRecipeReducer(state = null, action){
  switch (action.type){
    case GET_CURRENT_RECIPE:
      console.log('in reducer', action.steps)
      return action.steps

    default: 
      return state
  }
}