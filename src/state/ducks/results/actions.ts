import {
  ResultsRequest,
  Results,
  APIError,
  GET_RESULTS_START,
  GET_RESULTS_SUCCESS,
  GET_RESULTS_FAILED,
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
