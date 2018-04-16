/**
 * Test  sagas
 */
import initSagas, {
  watchProductDetailsRequested,
  fetchProductDetails,
} from '../saga';


describe('watchProductDetailsRequested', () => {
  const generator = watchProductDetailsRequested();

  it('should take latest PRODUCT_DETAILS_REQUESTED', () => {
    const cmd = generator.next().value;
    expect(cmd).toMatchSnapshot();
  });
});

describe('fetchProductDetailsdata', () => {
  const meta = {
    productId: '123',
  };

  it('should put PRODUCT_DETAILS_REQUEST_SUCCEEDED', () => {
    const yieldedResult = fetchProductDetails({ meta });
    const response = yieldedResult.next([{ }]).value;
    expect(response).toMatchSnapshot();
  });


  it('should put PRODUCT_DETAILS_REQUEST_FAILED on error', () => {
    const yieldedResult = fetchProductDetails({ meta });
    yieldedResult.next();
    const response = yieldedResult.throw(new Error('Product Details error')).value;
    expect(response).toMatchSnapshot();
  });
});

describe('initSagas', () => {
  it('should yield', () => {
    expect(initSagas().next().done).toBeFalsy();
  });
});
