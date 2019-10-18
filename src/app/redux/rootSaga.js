import 'regenerator-runtime/runtime';
import { all } from 'redux-saga/effects';
import login from './login/sagas';

/**
 * saga to yield all others
 */
export default function* rootSaga() {
  yield all([login()]);
}
