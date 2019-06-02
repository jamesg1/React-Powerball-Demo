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
  PrimaryNumbers: number[];
  SecondaryNumbers: number[];
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
  entities: { PrimaryNumbers: number[]; SecondaryNumbers: number[] };
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

export type ResultsActionTypes =
  | GetResultsAction
  | GetResultsSuccessAction
  | GetResultsFailedAction;
