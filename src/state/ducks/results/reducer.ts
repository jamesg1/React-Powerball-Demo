import produce from 'immer';
import {
  ResultsActionTypes,
  ResultsState,
  GET_RESULTS_START,
  GET_RESULTS_SUCCESS,
  GET_RESULTS_FAILED,
  CLEAR_RESULTS
} from './types';

export const initialState: ResultsState = {
  entities: { primaryNumbers: [], secondaryNumbers: [] },
  api: {
    getResults: {
      loading: false,
      success: false,
      error: null
    }
  }
};

const defaultResultsState = { primaryNumbers: [], secondaryNumbers: [] };
const defaultAPIState = { loading: false, success: false, error: null };

const ResultsReducer = (state = initialState, action: ResultsActionTypes): ResultsState => {
  return produce(state, (draft: ResultsState) => {
    switch (action.type) {
      case GET_RESULTS_START:
        draft.entities = defaultResultsState;
        draft.api.getResults = {
          loading: true,
          success: false,
          error: null
        };
        break;
      case GET_RESULTS_SUCCESS:
        draft.entities = action.payload;
        draft.api.getResults = {
          loading: false,
          success: true,
          error: null
        };
        break;
      case GET_RESULTS_FAILED:
        draft.entities = defaultResultsState;
        draft.api.getResults = {
          loading: false,
          success: false,
          error: action.error
        };
        break;
      case CLEAR_RESULTS:
        draft.entities = defaultResultsState;
        draft.api.getResults = defaultAPIState;
        break;
      default:
        return state;
    }
  });
};

export default ResultsReducer;
