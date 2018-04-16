import React from 'react';
import { shallowWithIntl } from 'utils/intlEnzymeTestHelper';

import { ProductDetailsPage, mapDispatchToProps } from '../index';
import {
  RightColumn,
} from '../styles';

describe('<ProductDetailsPage />', () => {
  const props = {
    getProductDetails: () => null,
    match: {
      params: {
        productId: '1234',
      },
    },
    productDetails: {
      title: 'Product detail',
      Promotions: {

      },
      ReturnPolicy: [
        { test: 'return' },
      ],
      ItemDescription: [{
        features: 'features test',
      }],
      purchasingChannelCode: 'test',
      Offers: [
        {
          OfferPrice: [
             { formattedPriceValue: '$25', priceQualifier: '50' },
          ],
        },
      ],
    },
  };

  it('should render ProductDetailsPage component', () => {
    const renderedComponent = shallowWithIntl(
      <ProductDetailsPage
        {...props}
      />,
       { lifecycleExperimental: true }
    );
    renderedComponent.setProps({ getProductDetails: jest.fn() });
    expect(renderedComponent.length).toBe(1);
  });

  it('should return null, when productDetails is empty object', () => {
    const renderedComponent = shallowWithIntl(
      <ProductDetailsPage
        productDetails={{}}
      />,
       { lifecycleExperimental: true }
    );
    expect(renderedComponent.find(RightColumn).length).toEqual(0);
  });

  describe('mapDispatchToProps function', () => {
    it('should mapDispatchToProps correctly', () => {
      const dispatchMap = mapDispatchToProps((e) => e);
      expect(dispatchMap).toMatchSnapshot();
    });
  });
});
