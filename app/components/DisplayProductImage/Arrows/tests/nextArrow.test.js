import React from 'react';
import { shallowWithIntl } from 'utils/intlEnzymeTestHelper';

import { NextArrow } from '../nextArrow';

describe('<NextArrow />', () => {
  it('should render', () => {
    const renderedComponent = shallowWithIntl(
      <NextArrow />
    );
    expect(renderedComponent.length).toEqual(1);
  });
});
