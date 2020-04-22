import { async, sync } from './actions'

const {
  asyncAdd,
} = async

const {
  add,
} = sync

export interface StateType {
  count: number
}

const INITIAL_STATE: StateType = {
  count: 0
}

function changeCount(state, action) {
  const { count } = action.payload
  return {
    ...state,
    count,
  }
}

export default function counter(state = INITIAL_STATE, action) {
  switch (action.type) {
    case asyncAdd.SUCCESS:
    case add.TYPE:
      return changeCount(state, action)
    default:
      return state
  }
}
