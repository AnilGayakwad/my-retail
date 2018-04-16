import React from 'react';
import { shallow } from 'enzyme';

import MainButtons from '../index';
import {
  InStoreContainer,
  PrimaryButton,
//  SecondaryButton,
} from '../styles';

describe('<MainButtons />', () => {
  it('should render MainButtons component', () => {
    const renderedComponent = shallow(
      <MainButtons
        purchasingChannelCode="1"
      />
    );
    expect(renderedComponent.length).toBe(1);
  });

  it('should render MainButtons component with "InStoreContainer" and not with "PrimaryButton", when purchasingChannelCode is 2', () => {
    const renderedComponent = shallow(
      <MainButtons
        purchasingChannelCode="2"
      />
    );
    expect(renderedComponent.find(InStoreContainer).length).toBe(1);
    expect(renderedComponent.find(PrimaryButton).length).toBe(0);
  });

  it('should render MainButtons component with "PrimaryButton" and not with "InStoreContaine", when purchasingChannelCode is 1', () => {
    const renderedComponent = shallow(
      <MainButtons
        purchasingChannelCode="1"
      />
    );
    expect(renderedComponent.find(PrimaryButton).length).toBe(1);
    expect(renderedComponent.find(InStoreContainer).length).toBe(0);
  });
});
