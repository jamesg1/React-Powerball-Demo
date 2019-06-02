/**
 * Interfaces / Types
 */

type Nullable<T> = T | null;

export interface ResultsRequest {
  CompanyId: string;
  MaxDrawCountPerProduct: number;
  OptionalProductFilter?: string[];
}

export interface Results {
  primaryNumbers: number[];
  secondaryNumbers: number[];
}

export interface APIError {
  ErrorInfo?: {
    ContactSupport: boolean;
    DisplayMessage: string;
    ErrorNo: number;
    SupportErrorReference: string;
    SystemId: number;
  };
  Success?: boolean;
}

export interface ResultsState {
  entities: { primaryNumbers: number[]; secondaryNumbers: number[] };
  api: {
    getResults: {
      loading: boolean;
      success: boolean;
      error: Nullable<APIError>;
    };
  };
}

/**
 * ActionConstants
 */
export const GET_RESULTS_START = 'tabcorp/powerball/GET_RESULTS_START';
export const GET_RESULTS_SUCCESS = 'tabcorp/powerball/GET_RESULTS_SUCCESS';
export const GET_RESULTS_FAILED = 'tabcorp/powerball/GET_RESULTS_FAILED';
export const CLEAR_RESULTS = 'tabcorp/powerball/CLEAR_RESULTS';

/**
 * Action Creator Types
 */
export interface GetResultsAction {
  type: typeof GET_RESULTS_START;
  payload: ResultsRequest;
}

export interface GetResultsSuccessAction {
  type: typeof GET_RESULTS_SUCCESS;
  payload: Results;
}

export interface GetResultsFailedAction {
  type: typeof GET_RESULTS_FAILED;
  error: APIError;
}

export interface ClearResultsAction {
  type: typeof CLEAR_RESULTS;
}

export type ResultsActionTypes =
  | GetResultsAction
  | GetResultsSuccessAction
  | GetResultsFailedAction
  | ClearResultsAction;
