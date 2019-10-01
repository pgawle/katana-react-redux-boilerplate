import { combineReducers } from 'redux';

import tasklist from './tasklist/reducers';
import login from './login/reducers';
import auth from './auth/reducers';

const rootReducer = combineReducers({
  tasklist,
  login,
  auth
});

export default rootReducer;
