import { fromJS } from 'immutable';

import makeSelectProductDetails, {
//  makeSelectProductIdFromLocation,
  makeSelectProductDetailByProductId,
  makeSelectProductTitleByProductId,
  makeSelectProductImagesByProductId,
  makeSelectProductReviewsByProductId,
} from '../selectors';

const selector = makeSelectProductDetails();

describe('Product Details selectors', () => {
  const props = {
    match: {
      params: {
        productId: '123',
      },
    },
  };

  const props456 = {
    match: {
      params: {
        productId: '456',
      },
    },
  };


  describe('makeSelectProductDetails', () => {
    it('should return ProductDetails as an object', () => {
      const mockedState = fromJS({
        ProductDetails: {
          123: {
            map: {},
            meta: {},
            error: {},
          },
        },
      });
      expect(selector(mockedState)).toEqual({ 123: { map: {}, meta: {}, error: {} } });
    });
  });

  describe('makeSelectProductDetailByProductId', () => {
    const mockedState = fromJS({
      ProductDetails: {
        123: {
          map: {
            CatalogEntryView: [
              {
                title: 'product title',
              },
            ],
          },
        },
        321: {
          meta: {},
        },
      },
    });
    it('should return object matching with productId in state', () => {
      expect(makeSelectProductDetailByProductId()(mockedState, props)).toEqual({ title: 'product title' });
    });

    it('should return empty object when no productId match in state', () => {
      expect(makeSelectProductDetailByProductId()(mockedState, props456)).toEqual({ });
    });
  });

  describe('makeSelectProductTitleByProductId', () => {
    const mockedState = fromJS({
      ProductDetails: {
        123: {
          map: {
            CatalogEntryView: [
              {
                title: 'product title',
              },
            ],
          },
        },
      },
    });

    it('should return Object matching productId=123', () => {
      expect(makeSelectProductTitleByProductId()(mockedState, props)).toEqual('product title');
    });
  });

  describe('makeSelectProductImagesByProductId', () => {
    const mockedState = fromJS({
      ProductDetails: {
        123: {
          map: {
            CatalogEntryView: [
              {
                Images: [
                  {
                    AlternateImages: [
                      {
                        image: 'http://image.com/GUEST_83705133-fb5e-4357-be37-94ae1392b915',
                      },
                      {
                        image: 'http://image.com/GUEST_f84a0f4b-8e1d-4902-9c47-d04096ac960b',
                      },
                      {
                        image: 'http://image.com/GUEST_40a6190c-d9e3-4ddf-b06d-6db6a13927f3',
                      },
                      {
                        image: 'http://image.com/GUEST_01100c7e-01e2-450d-b7d3-80b09b6d5a83',
                      },
                      {
                        image: 'http://image.com/GUEST_47a050df-3338-4c6e-8e02-680abce3bd08',
                      },
                      {
                        image: 'http://image.com/GUEST_2cbd7eea-d3f1-4cc0-ac1a-6f18d8095044',
                      },
                      {
                        image: 'http://image.com/GUEST_383a921e-d68d-40c3-8ffc-64d03538c816',
                      },
                    ],
                    PrimaryImage: [
                      {
                        image: 'http://image.com/14263758',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        },
      },
    });

    it('should return error object matching productId=123', () => {
      expect(makeSelectProductImagesByProductId()(mockedState, props)).toMatchSnapshot();
    });
  });

  describe('makeSelectProductReviewsByProductId', () => {
    const mockedState = fromJS({
      ProductDetails: {
        123: {
          map: {
            CatalogEntryView: [
              {
                CustomerReview: [
                  {
                    Con: [
                      {
                        datePosted: 'Mon Mar 11 13:13:55 UTC 2013',
                        overallRating: '1',
                        screenName: 'New York',
                        title: 'Very unhappy',
                      },
                    ],
                    ConsolidatedRatableAttributes: [
                      {
                        description: 'Quality',
                        name: 'QUALITY',
                        value: '4',
                      },
                    ],
                    Pro: [
                      {
                        datePosted: 'Thu Apr 18 19:42:19 UTC 2013',
                        overallRating: '5',
                        screenName: 'Eric',
                        title: 'Fantastic Blender',
                      },
                    ],
                    Reviews: [],
                    consolidatedOverallRating: '4',
                    totalPages: '2',
                    totalReviews: '14',
                  },
                ],
              },
            ],
          },
        },
      },
    });

    it('should return Object matching productId=123', () => {
      expect(makeSelectProductReviewsByProductId()(mockedState, props)).toMatchSnapshot();
    });
  });
});
