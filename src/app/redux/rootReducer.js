import { combineReducers } from 'redux';

import tasklist from './tasklist/reducers';

const rootReducer = combineReducers({
  tasklist
});

export default rootReducer;
