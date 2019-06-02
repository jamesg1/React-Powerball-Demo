import { selectEntities, selectApi } from '../selectors';

const testSet = { primaryNumbers: [1, 2, 3, 4, 5, 6, 7], secondaryNumbers: [8] };
const apiState = {
  getResults: {
    loading: true,
    success: false,
    error: null
  }
};

describe('Results selectors', () => {
  describe('selectEntities()', () => {
    it('should return entities object from results reducer', () => {
      const state = {
        results: {
          entities: testSet,
          api: apiState
        }
      };
      expect(selectEntities(state)).toEqual(testSet);
    });
  });
  describe('selectApi()', () => {
    it('should return api object from results reducer', () => {
      const state = {
        results: {
          entities: testSet,
          api: apiState
        }
      };
      expect(selectApi(state)).toEqual(apiState);
    });
  });
});
