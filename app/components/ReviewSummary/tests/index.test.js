import React from 'react';
import { shallow } from 'enzyme';

import ReviewSummary from '../index';

describe('<ReviewSummary />', () => {
  const props = {
    datePosted: 'Mon Mar 11 13:13:55 UTC 2013',
    overallRating: '1',
    review: "Less than 2 months after purchase it completely stopped working. First it wouldn't detect the pitcher when trying to blend a significant amount, a couple weeks later it wouldn't detect the single serve cup. ",
    screenName: 'New York',
    title: 'Very unhappy',
  };

  it('should render ReviewSummary component', () => {
    const renderedComponent = shallow(
      <ReviewSummary
        {...props}
      />
    );
    expect(renderedComponent.length).toBe(1);
  });
});
