
import {
  productDetailsRequestSucceeded,
  productDetailsRequestFailed,
} from '../actions';


describe('productDetails actions', () => {
  describe('productDetailsRequestSucceeded', () => {
    it('should have PRODUCT_DETAILS_REQUEST_SUCCEEDED type', () => {
      const registries = {
        pass: 'pass',
      };
      expect(productDetailsRequestSucceeded(registries, '123')).toMatchSnapshot();
    });
  });

  describe('productDetailsRequestFailed', () => {
    it('should have PRODUCT_DETAILS_REQUEST_FAILED type', () => {
      expect(productDetailsRequestFailed(new Error('failed'), '123')).toMatchSnapshot();
    });
  });
});
