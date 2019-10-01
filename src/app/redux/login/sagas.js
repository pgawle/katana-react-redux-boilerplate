import { call, put, takeLatest, all } from 'redux-saga/effects';
import { loginRequest, loginError, loginSuccess } from './actions';
import { authenticate } from '../auth/actions';
import { LOGIN } from './types';

import { fetchLogin } from '../../../api/login';

function* Login(args) {
  const { email, pass } = args;

  try {
    yield put(loginRequest());
    const data = yield call(() => fetchLogin(email, pass));
    yield all([put(loginSuccess(data)), put(authenticate(email))]);
  } catch (error) {
    // console.log(error);
    yield put(loginError(error.message));
  }
}

function* Saga() {
  yield takeLatest(LOGIN, Login);
}

export default Saga;
