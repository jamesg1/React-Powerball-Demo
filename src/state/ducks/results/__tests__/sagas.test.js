import watcher, { watchGetResults, getResults, getResultsSuccess, API_BASE_URL } from '../sagas';
import * as actions from '../actions';
import { GET_RESULTS_START } from '../types';
import { all, takeEvery, call, fork, put } from 'redux-saga/effects';
import { cloneableGenerator } from '@redux-saga/testing-utils';

const query = {
  CompanyId: 'GoldenCasket',
  MaxDrawCountPerProduct: 1,
  OptionalProductFilter: ['Powerball']
};

describe('Results sagas', () => {
  describe('getResults', () => {
    const action = { action: GET_RESULTS_START, payload: query };
    let gen = cloneableGenerator(getResults)(action);
    it('fetches results from api', () => {
      const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(action.payload)
      };
      expect(gen.next().value).toEqual(call(fetch, `${API_BASE_URL}/latestresults`, options));
    });

    it('handles error from api/saga', () => {
      const clone = gen.clone();
      const error = {
        ErrorInfo: {
          ContactSupport: true,
          DisplayMessage: 'Error Message',
          ErrorNo: 1,
          SupportErrorReference: 'ABC123',
          SystemId: 2
        },
        Success: false
      };
      const response = {
        status: 400,
        json: () => error
      };

      expect(clone.next(response).value).toEqual(call([response, response.json]));
      expect(clone.next(error).value).toStrictEqual(put(actions.getResultsFailed(error)));
      expect(clone.next().done).toBe(true);
    });

    it('handles successful response', () => {
      const clone = gen.clone();
      const response = { status: 200, json: () => {} };

      const primaryNumbers = [1, 2, 3, 4, 5, 6, 7];
      const secondaryNumbers = [10];

      expect(clone.next(response).value).toEqual(call([response, response.json]));

      expect(
        clone.next({
          DrawResults: {
            [0]: { PrimaryNumbers: [1, 2, 3, 4, 5, 6, 7], SecondaryNumbers: [10] }
          }
        }).value
      ).toEqual(put(actions.getResultsSuccess({ primaryNumbers, secondaryNumbers })));
      expect(clone.next().done).toBe(true);
    });
  });
  describe('watchGetResults()', () => {
    it('should listen GET_RESULTS_START actions', () => {
      const gen = watchGetResults();
      const expected = takeEvery(GET_RESULTS_START, getResults);
      const result = gen.next();
      expect(result.value).toEqual(expected);
    });
  });
  describe('resultsWatcher()', () => {
    it('should listen for all results actions', () => {
      const gen = watcher();
      const expected = all([fork(watchGetResults)]);
      const result = gen.next();
      expect(result.value).toEqual(expected);
    });
  });
});
