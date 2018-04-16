import React from 'react';
import { shallow } from 'enzyme';


import Promotions from '../index';

describe('<Promotions />', () => {
  const props = {
    promotions: [
      {
        Description: [
          {
            shortDescription: 'SPEND $50, GET FREE SHIPPING',
          },
        ],
      },
    ],
  };

  it('should render Promotions component', () => {
    const renderedComponent = shallow(
      <Promotions
        {...props}
      />
    );
    expect(renderedComponent.length).toBe(1);
  });
});
