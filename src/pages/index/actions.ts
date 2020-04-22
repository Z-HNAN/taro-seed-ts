import { Async, Sync } from 'redux-action-boilerplate'

export const async = new Async({
  prefix: 'index',
  actions: [
    'asyncAdd'
  ]
})

export const sync = new Sync({
  prefix: 'index',
  actions: [
    'add'
  ]
})
