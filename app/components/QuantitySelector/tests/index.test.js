import React from 'react';
import { shallowWithIntl } from 'utils/intlEnzymeTestHelper';

import { QuantitySelector, mapDispatchToProps } from '../index';

describe('<QuantitySelector />', () => {
  const props = {
    uiState: {
      quantitySelected: 1,
    },
    updateUiState: () => {},
  };

  it('should render QuantitySelector component', () => {
    const renderedComponent = shallowWithIntl(
      <QuantitySelector
        {...props}
      />
    );
    expect(renderedComponent.length).toBe(1);
  });

  describe('updateUiStateObject', () => {
    it('should call updateUiState on updateUiStateObject', () => {
      const mockFunc = jest.fn();
      const newProps = Object.assign({}, props, { updateUiState: mockFunc });
      const renderedComponent = shallowWithIntl(
        <QuantitySelector
          {...newProps}
        />
      );
      renderedComponent.instance().updateUiStateObject(mockFunc);
      expect(mockFunc).toHaveBeenCalled();
    });
  });

  describe('incrementQuantity', () => {
    it('should call updateUiState on incrementQuantity', () => {
      const mockFunc = jest.fn();
      const newProps = Object.assign({}, props, { updateUiState: mockFunc });
      const renderedComponent = shallowWithIntl(
        <QuantitySelector
          {...newProps}
        />
      );
      renderedComponent.instance().incrementQuantity();
      expect(mockFunc).toHaveBeenCalled();
    });
  });

  describe('decrementQuantity', () => {
    it('should call updateUiState on decrementQuantity', () => {
      const mockFunc = jest.fn();
      const newProps = Object.assign({}, props, { updateUiState: mockFunc });
      const renderedComponent = shallowWithIntl(
        <QuantitySelector
          {...newProps}
        />
      );
      renderedComponent.instance().decrementQuantity(mockFunc);
      expect(mockFunc).toHaveBeenCalled();
    });
  });

  describe('mapDispatchToProps function', () => {
    it('should mapDispatchToProps correctly', () => {
      const dispatchMap = mapDispatchToProps((e) => e);
      expect(dispatchMap).toMatchSnapshot();
    });
  });
});
