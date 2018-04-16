import React from 'react';
import { shallow } from 'enzyme';

import SecondaryButtons from '../index';

describe('<SecondaryButtons />', () => {
  const props = {
    images: [
      'http://image1',
      'http://image2',
    ],
    moveNext: () => null,
    movePrevious: () => null,
    photoIndex: 1,
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
