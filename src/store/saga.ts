import { all } from 'redux-saga/effects'

import index from '@pages/Index/saga'

export default function* () {
  yield all([
    index(),
  ])
}
