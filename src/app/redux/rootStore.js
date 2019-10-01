import { applyMiddleware, createStore, compose } from 'redux';
// import { createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';
// import { saveState, loadState } from '../utils/persistedState';

// for redux debugging https://github.com/zalmoxisus/redux-devtools-extension#usage
// const store = createStore(
//   rootReducer,
//   // for redux debugging https://github.com/zalmoxisus/redux-devtools-extension#usage
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line no-underscore-dangle
// );

const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const sagaMiddleware = createSagaMiddleware();
// const savedState = loadState();

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware)
  // other store enhancers if any
);

// const store = createStore(rootReducer, savedState, enhancer);
const store = createStore(rootReducer, enhancer);

// store.subscribe(() => {
//   saveState({
//     auth: store.getState().auth
//   });
// });

sagaMiddleware.run(rootSaga);

export default store;
