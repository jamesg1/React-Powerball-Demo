import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { ResultsRequest, GET_RESULTS_START, GetResultsAction } from './types';
import { getResultsSuccess, getResultsFailed } from './actions';

const API_BASE_URL = 'https://data.api.thelott.com/sales/vmax/web/data/lotto';

export const getResultsService = async (request: ResultsRequest) => {
  const endpoint = `${API_BASE_URL}/latestresults`;
  const params = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(request)
  };
  return await fetch(endpoint, params);
};

export const getResults = function*(action: GetResultsAction) {
  const { payload } = action;
  try {
    const response = yield call(getResultsService, payload);
    if (response.status >= 200 && response.status < 300) {
      const {
        DrawResults: {
          [0]: { PrimaryNumbers: primaryNumbers, SecondaryNumbers: secondaryNumbers }
        }
      } = yield response.json();
      yield put(getResultsSuccess({ primaryNumbers, secondaryNumbers }));
    } else {
      const error = yield response.json();
      throw error;
    }
  } catch (error) {
    yield put(getResultsFailed(error));
  }
};
function* watchGetResults() {
  yield takeEvery(GET_RESULTS_START, getResults);
}

export default function*() {
  yield all([fork(watchGetResults)]);
}
