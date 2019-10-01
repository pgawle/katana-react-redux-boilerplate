import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from './types';

const initialState = {
  loading: false,
  error: false,
  errorMsg: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        loading: true,
        error: false,
        errorMsg: ''
      };
    case LOGIN_SUCCESS:
      return {
        loading: false,
        error: false,
        errorMsg: ''
      };
    case LOGIN_ERROR:
      return {
        loading: false,
        error: true,
        errorMsg: action.errorMsg
      };
    default:
      return state;
  }
};

export default reducer;
