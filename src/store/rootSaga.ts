import { all } from 'redux-saga/effects';

import { myPostsSaga, mySearchSagas } from './sagas';

export default function* rootSaga() {
  yield all([...mySearchSagas, ...myPostsSaga]);
}
