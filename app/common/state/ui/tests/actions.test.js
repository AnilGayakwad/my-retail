
import {
  updateUiState,
} from '../actions';


describe('ui actions', () => {
  describe('updateUiState', () => {
    it('should have UI_STATE type', () => {
      const registries = {
        test: 'pass',
      };
      expect(updateUiState(registries, '123')).toMatchSnapshot();
    });
  });
});
