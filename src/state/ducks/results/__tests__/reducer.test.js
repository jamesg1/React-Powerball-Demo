import reducer, { initialState, defaultResultsState } from '../reducer';
import {
  GET_RESULTS_START,
  CLEAR_RESULTS,
  GET_RESULTS_SUCCESS,
  GET_RESULTS_FAILED
} from '../types';

describe('Results reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, initialState)).toEqual(initialState);
  });

  it('should handle GET_RESULTS_START', () => {
    const startAction = {
      type: GET_RESULTS_START,
      payload: {
        CompanyId: 'GoldenCasket',
        MaxDrawCountPerProduct: 1,
        OptionalProductFilter: ['Powerball']
      }
    };
    expect(reducer(initialState, startAction)).toEqual({
      api: {
        getResults: {
          error: null,
          loading: true,
          success: false
        }
      },
      entities: defaultResultsState
    });
  });

  it('should handle GET_RESULTS_SUCCESS', () => {
    const successAction = {
      type: GET_RESULTS_SUCCESS,
      payload: { primaryNumbers: [1, 2, 3, 4, 5, 6, 7], secondaryNumbers: [1] }
    };
    const state = {
      ...initialState,
      api: { getResults: { loading: true } }
    };
    expect(reducer(state, successAction)).toEqual({
      ...initialState,
      api: { getResults: { error: null, loading: false, success: true } },
      entities: { primaryNumbers: [1, 2, 3, 4, 5, 6, 7], secondaryNumbers: [1] }
    });
  });

  it('should handle GET_RESULTS_FAILED', () => {
    const error = {
      ErrorInfo: {
        ContactSupport: true,
        DisplayMessage: 'Error Message',
        ErrorNo: 1,
        SupportErrorReference: 'ABC123',
        SystemId: 1
      },
      Success: false
    };
    const failedAction = {
      type: GET_RESULTS_FAILED,
      error
    };
    const state = {
      ...initialState,
      api: { getResults: { loading: true } }
    };
    expect(reducer(state, failedAction)).toEqual({
      ...initialState,
      api: { getResults: { error: error, loading: false, success: false } }
    });
  });

  it('should handle CLEAR_RESULTS', () => {
    const clearAction = {
      type: CLEAR_RESULTS
    };
    const state = {
      ...initialState,
      entities: { primaryNumbers: [1, 2, 3, 4, 5, 6, 7], secondaryNumbers: [1] }
    };
    expect(reducer(state, clearAction)).toEqual(initialState);
  });
});
