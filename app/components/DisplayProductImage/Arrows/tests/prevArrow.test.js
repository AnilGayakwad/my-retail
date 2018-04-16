import React from 'react';
import { shallowWithIntl } from 'utils/intlEnzymeTestHelper';

import { PrevArrow } from '../prevArrow';

describe('<PrevArrow />', () => {
  it('should render', () => {
    const renderedComponent = shallowWithIntl(
      <PrevArrow />
    );
    expect(renderedComponent.length).toEqual(1);
  });
});
