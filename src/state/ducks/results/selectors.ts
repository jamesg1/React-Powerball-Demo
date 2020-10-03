import { createSelector } from 'reselect';
import { AppState } from 'state/store';

const getBase = (state: AppState) => state.results;

export const selectEntities = createSelector(getBase, base => base.entities);

export const selectApi = createSelector(getBase, base => base.api);

export default {
  selectEntities,
  selectApi
};
