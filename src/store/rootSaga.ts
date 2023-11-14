import { all } from 'redux-saga/effects';

import { mySearchSagas } from './sagas';

export default function* rootSaga() {
  yield all([...mySearchSagas]);
}
