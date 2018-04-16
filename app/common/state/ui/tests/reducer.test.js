
import { fromJS } from 'immutable';
import UiStateReducer from '../reducer';
import {
  updateUiState,
} from '../actions';

describe('ui Reducer', () => {
  describe('DEFAULT', () => {
    it('returns the initial state', () => {
      const initialState = UiStateReducer(undefined, {}).toJS();
      expect(initialState).toMatchSnapshot();
    });
  });

  describe('UI_STATE', () => {
    it('should update existing "productDetailsPage" object', () => {
      const state = fromJS({
        productDetailsPage: {
          test: 'show be gone',
        },
      });
      const action = updateUiState({ test: 'passed' });
      expect(UiStateReducer(state, action)).toMatchSnapshot();
    });
  });
});
