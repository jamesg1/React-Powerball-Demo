import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { fork, all } from 'redux-saga/effects';

/**
 * Setup reducer
 */
import { reducer as resultsReducer, sagas as resultsSagas } from './ducks/results';
const rootReducer = combineReducers({ results: resultsReducer });
export type AppState = ReturnType<typeof rootReducer>;

/**
 * Setup redux middleware
 */
const sagaMiddleware = createSagaMiddleware();
function* sagas() {
  yield all([fork(resultsSagas)]);
}
const middlewares = [logger, sagaMiddleware];

/**
 * Init store with rootReducer, devtools and middleware
 */
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));
sagaMiddleware.run(sagas);

export default store;
