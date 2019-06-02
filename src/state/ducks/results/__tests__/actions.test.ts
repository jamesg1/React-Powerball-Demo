import { getResults, getResultsSuccess, getResultsFailed, clearResults } from '../actions';
import {
  APIError,
  Results,
  GET_RESULTS_START,
  GET_RESULTS_SUCCESS,
  GET_RESULTS_FAILED,
  CLEAR_RESULTS
} from '../types';

describe('Results actions', () => {
  describe('getResults()', () => {
    it('should create an action to fetch the latest powerball results', () => {
      const query = {
        CompanyId: 'GoldenCasket',
        MaxDrawCountPerProduct: 1,
        OptionalProductFilter: ['Powerball']
      };
      const payload = query;
      const expectedAction = {
        type: GET_RESULTS_START,
        payload
      };
      expect(getResults(payload)).toEqual(expectedAction);
    });
  });
  describe('getResultsSuccess()', () => {
    it('should create an action to store the latest powerball results', () => {
      const payload: Results = {
        primaryNumbers: [1, 2, 3, 4, 5, 6, 7],
        secondaryNumbers: [1]
      };
      const expectedAction = {
        type: GET_RESULTS_SUCCESS,
        payload
      };
      expect(getResultsSuccess(payload)).toEqual(expectedAction);
    });
  });
  describe('getResultsSuccess()', () => {
    it('should create an action to store api error', () => {
      const error: APIError = {
        ErrorInfo: {
          ContactSupport: true,
          DisplayMessage: 'Error Message example',
          ErrorNo: 123,
          SupportErrorReference: 'ABC1',
          SystemId: 1
        },
        Success: false
      };
      const expectedAction = {
        type: GET_RESULTS_FAILED,
        error
      };
      expect(getResultsFailed(error)).toEqual(expectedAction);
    });
  });
  describe('clearResults()', () => {
    it('should create an action to clear powerball results and api state', () => {
      const expectedAction = {
        type: CLEAR_RESULTS
      };
      expect(clearResults()).toEqual(expectedAction);
    });
  });
});
