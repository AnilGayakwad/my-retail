import React from 'react';
import { shallow } from 'enzyme';

import Returns from '../index';

describe('<Returns />', () => {
  const props = {
    policy: {

    },
  };

  it('should render Returns component', () => {
    const renderedComponent = shallow(
      <Returns
        {...props}
      />
    );
    expect(renderedComponent.length).toBe(1);
  });
});
