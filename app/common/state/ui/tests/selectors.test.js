import { fromJS } from 'immutable';
import makeSelectUiState, {
  makeSelectUiForProductDetailsPageState,
} from '../selectors';

const selector = makeSelectUiState();

describe('ui selectors', () => {
  const state = fromJS({
    ui: {
      newPage: {
        test: 'newPageObj',
      },
      productDetailsPage: {
        test: 'pass',
      },
    },
  });

  it('should return Ui as an object', () => {
    expect(selector(state)).toMatchSnapshot();
  });

  describe('makeSelectUiForProductDetailsPageState', () => {
    it('should return ProductDetails as an object', () => {
      expect(makeSelectUiForProductDetailsPageState()(state)).toEqual({ test: 'pass' });
    });
  });
});
