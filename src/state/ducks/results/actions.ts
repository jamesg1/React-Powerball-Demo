import {
  ResultsRequest,
  Results,
  APIError,
  GET_RESULTS_START,
  GET_RESULTS_SUCCESS,
  GET_RESULTS_FAILED,
  CLEAR_RESULTS,
  ResultsActionTypes
} from './types';

export function getResults(resultsRequest: ResultsRequest): ResultsActionTypes {
  return {
    type: GET_RESULTS_START,
    payload: resultsRequest
  };
}

export function getResultsSuccess(results: Results): ResultsActionTypes {
  return {
    type: GET_RESULTS_SUCCESS,
    payload: results
  };
}

export function getResultsFailed(error: APIError): ResultsActionTypes {
  return {
    type: GET_RESULTS_FAILED,
    error
  };
}

export function clearResults(): ResultsActionTypes {
  return {
    type: CLEAR_RESULTS
  };
}
