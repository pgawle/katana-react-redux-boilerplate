import { LOGIN, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from './types';

export const loginRequest = () => {
  return { type: LOGIN_REQUEST };
};

export const loginSuccess = () => {
  return { type: LOGIN_SUCCESS };
};

export const loginError = error => {
  return { type: LOGIN_ERROR, errorMsg: error };
};

export const login = (email, pass) => {
  return { type: LOGIN, email, pass };
};
