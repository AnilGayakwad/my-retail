import React from 'react';
import { shallow } from 'enzyme';

import SecondaryButtons from '../index';

describe('<SecondaryButtons />', () => {
  const props = {
  };

  it('should render SecondaryButtons component', () => {
    const renderedComponent = shallow(
      <SecondaryButtons
        {...props}
      />
    );
    expect(renderedComponent.length).toBe(1);
  });
});
