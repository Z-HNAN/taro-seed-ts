import { put, delay, takeEvery } from 'redux-saga/effects'
import { async } from './actions'

const {
  asyncAdd
} = async

function* asyncAddRequest({ payload }) {
  const { count } = payload
  yield delay(1000)
  yield put(asyncAdd.success({ count }))
}

export default function* () {
  yield takeEvery(asyncAdd.TYPE, asyncAddRequest)
}
