import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { GET_RESULTS_START, GetResultsAction } from './types';
import { getResultsSuccess, getResultsFailed } from './actions';

export const API_BASE_URL = 'https://data.api.thelott.com/sales/vmax/web/data/lotto';

export const getResults = function*(action: GetResultsAction) {
  const { payload } = action;
  try {
    const response = yield call(fetch, `${API_BASE_URL}/latestresults`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (response.status >= 200 && response.status < 300) {
      const data = yield call([response, response.json]);
      const {
        DrawResults: {
          [0]: { PrimaryNumbers: primaryNumbers, SecondaryNumbers: secondaryNumbers }
        }
      } = data;
      yield put(getResultsSuccess({ primaryNumbers, secondaryNumbers }));
    } else {
      const error = yield call([response, response.json]);
      throw error;
    }
  } catch (error) {
    yield put(getResultsFailed(error));
  }
};

export function* watchGetResults() {
  yield takeEvery(GET_RESULTS_START, getResults);
}

export default function*() {
  yield all([fork(watchGetResults)]);
}
