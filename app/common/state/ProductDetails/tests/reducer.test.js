
import { fromJS } from 'immutable';
import ProductDetailsReducer from '../reducer';
import {
  productDetailsRequested,
  productDetailsRequestSucceeded,
  productDetailsRequestFailed,
} from '../actions';

describe('ProductDetails Reducer', () => {
  describe('DEFAULT', () => {
    it('returns the initial state', () => {
      const initialState = ProductDetailsReducer(undefined, {}).toJS();
      expect(initialState).toMatchSnapshot();
    });
  });

  describe('PRODUCT_DETAILS_REQUESTED', () => {
    it('should set isFetching for productId=123', () => {
      const state = fromJS({
        ProductDetails: {
          123: {
            meta: {
              isFetching: false,
            },
          },
        },
      });
      const action = productDetailsRequested('123');
      expect(ProductDetailsReducer(state, action)).toMatchSnapshot();
    });
  });

  describe('PRODUCT_DETAILS_REQUEST_SUCCEEDED', () => {
    beforeEach(() => {
      Date.nowTemp = Date.now;
      Date.now = () => 123123;
    });

    afterEach(() => {
      Date.now = Date.nowTemp;
    });
    it('should wipe errorKey, set isFetching false for productId=123', () => {
      const state = fromJS({
        123: {
          map: { },
          error: {
            errorKey: 'should be gone',
          },
          meta: {
            isFetching: true,
          },
        },
      });
      const action = productDetailsRequestSucceeded({ productDetails: { } }, '123');
      expect(ProductDetailsReducer(state, action)).toMatchSnapshot();
    });
  });

  describe('PRODUCT_DETAILS_REQUEST_FAILED', () => {
    it('should set errorKey to getProductDetailsFailed and isFetching to false for productId=123', () => {
      const state = fromJS({
        123: {
          error: {
            errorKey: '',
          },
          meta: {
            isFetching: true,
          },
        },
      });
      const action = productDetailsRequestFailed(new Error(), '123');
      expect(ProductDetailsReducer(state, action)).toMatchSnapshot();
    });
  });
});
