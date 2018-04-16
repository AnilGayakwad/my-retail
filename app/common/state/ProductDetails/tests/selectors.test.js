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
                        image: 'http://image.com/14263758_Alt01',
                      },
                      {
                        image: 'http://image.com/14263758_Alt02',
                      },
                      {
                        image: 'http://image.com/14263758_Alt03',
                      },
                      {
                        image: 'http://image.com/14263758_Alt04',
                      },
                      {
                        image: 'http://image.com/14263758_Alt05',
                      },
                      {
                        image: 'http://image.com/14263758_Alt06',
                      },
                      {
                        image: 'http://image.com/14263758_Alt07',
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
