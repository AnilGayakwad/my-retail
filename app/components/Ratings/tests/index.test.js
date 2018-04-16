import React from 'react';
import { shallow } from 'enzyme';

import { Ratings } from '../index';
import {
  SummaryRow,
} from '../styles';

describe('<Ratings />', () => {
  const props = {
    productReviews: {
      totalReviews: 4,
      consolidatedOverallRating: 5,
      Con: [
        {
          datePosted: 'Mon Mar 11 13:13:55 UTC 2013',
          overallRating: '1',
          review: "Less than 2 months after purchase it completely stopped working. First it wouldn't detect the pitcher when trying to blend a significant amount, a couple weeks later it wouldn't detect the single serve cup. ",
          reviewKey: 'b326b0d6-e6ae-4ec5-8080-720f0ad741af',
          screenName: 'New York',
          title: 'Very unhappy',
        },
      ],
      Pro: [
        {
          datePosted: 'Mon Mar 11 13:13:55 UTC 2013',
          overallRating: '1',
          review: "Less than 2 months after purchase it completely stopped working. First it wouldn't detect the pitcher when trying to blend a significant amount, a couple weeks later it wouldn't detect the single serve cup. ",
          reviewKey: 'b326b0d6-e6ae-4ec5-8080-720f0ad741af',
          screenName: 'New York',
          title: 'Very unhappy',
        },
      ],

    },
  };

  it('should render Ratings component', () => {
    const renderedComponent = shallow(
      <Ratings
        {...props}
      />
    );
    expect(renderedComponent.length).toBe(1);
  });

  it('should return null, when productReviews is empty object', () => {
    const renderedComponent = shallow(
      <Ratings
        productReviews={{}}
      />
    );
    expect(renderedComponent.find(SummaryRow).length).toEqual(0);
  });
});
