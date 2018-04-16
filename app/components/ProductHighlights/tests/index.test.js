import React from 'react';
import { shallow } from 'enzyme';

import ProductHighlights from '../index';

describe('<ProductHighlights />', () => {
  const props = {
    highlights: [
      'testing 1',
      'test 2',
    ],
  };

  it('should render ProductHighlights component', () => {
    const renderedComponent = shallow(
      <ProductHighlights
        {...props}
      />
    );
    expect(renderedComponent.length).toBe(1);
  });
});
