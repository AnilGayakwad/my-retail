import React from 'react';
import { shallow } from 'enzyme';

import NotFound from '../index';

describe('<NotFound />', () => {
  const props = {
  };

  it('should render NotFound component', () => {
    const renderedComponent = shallow(
      <NotFound
        {...props}
      />
    );
    expect(renderedComponent.length).toBe(1);
  });
});
