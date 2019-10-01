import { AUTHENTICATE, DEAUTHENTICATE } from './types';

const initialState = {
  jwt: '',
  isAuthenticated: false,
  email: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        email: action.user,
        isAuthenticated: true
      };

    case DEAUTHENTICATE:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
