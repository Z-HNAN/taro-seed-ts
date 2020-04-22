import { combineReducers } from 'redux'

import RecipeReducer, { StateType } from '@pages/Recipe/reducer'


export interface IConnectState {
  recipe: StateType
  
}

export default combineReducers<IConnectState>({
  recipe: RecipeReducer,
  // home: homeReducer,
})
