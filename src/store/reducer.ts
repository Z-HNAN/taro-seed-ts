import { combineReducers } from 'redux'

import IndexReducer, { StateType } from '@pages/Index/reducer'


export interface IConnectState {
  index: StateType
}

export default combineReducers<IConnectState>({
  index: IndexReducer,
})
