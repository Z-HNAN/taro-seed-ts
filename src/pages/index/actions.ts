import { asyncCreator, syncCreator } from 'create-redux-action'

export const async = asyncCreator({
  prefix: 'index',
  actions: [
    'asyncAdd'
  ]
})

export const sync = syncCreator({
  prefix: 'index',
  actions: [
    'add'
  ]
})
