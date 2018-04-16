import React from 'react';
import { shallowWithIntl } from 'utils/intlEnzymeTestHelper';

import { DisplayProductImage, mapDispatchToProps } from '../index';

describe('<DisplayProductImage />', () => {
  const props = {
    uiState: {
      imageToDisplay: 0,
      showLargeImages: true,
      photoIndex: 0,
      quantitySelected: 1,
    },
    productImages: [
      { image: 'http://image1' },
      { image: 'http://image2' },
    ],
    productTitle: 'test',
    updateUiState: () => {},
  };

  it('should render DisplayProductImage component', () => {
    const renderedComponent = shallowWithIntl(
      <DisplayProductImage
        {...props}
      />
    );
    renderedComponent.instance().setFocusOnHeading();
    expect(renderedComponent.length).toBe(1);
  });

  describe('setFocusOnHeading', () => {
    it('should call focus of element passed to setFocusOnHeading', () => {
      const focus = jest.fn();
      const mockEle = {
        focus,
      };
      const renderedComponent = shallowWithIntl(
        <DisplayProductImage
          {...props}
        />
        , { disableLifecycleMethods: true }
      );
      renderedComponent.instance().setFocusOnHeading(mockEle);
      expect(focus).toHaveBeenCalled();
    });
  });

  describe('onImageChange', () => {
    it('should call updateUiState on onImageChange', () => {
      const mockFunc = jest.fn();
      const newProps = Object.assign({}, props, { updateUiState: mockFunc });
      const renderedComponent = shallowWithIntl(
        <DisplayProductImage
          {...newProps}
        />
      );
      renderedComponent.instance().onImageChange(mockFunc);
      expect(mockFunc).toHaveBeenCalled();
    });
  });

  describe('viewLargerImage', () => {
    it('should call updateUiState on viewLargerImage', () => {
      const mockFunc = jest.fn();
      const newProps = Object.assign({}, props, { updateUiState: mockFunc });
      const renderedComponent = shallowWithIntl(
        <DisplayProductImage
          {...newProps}
        />
      );
      renderedComponent.instance().viewLargerImage(mockFunc);
      expect(mockFunc).toHaveBeenCalled();
    });
  });

  describe('onClickNext', () => {
    it('should call updateUiState on onClickNext', () => {
      const mockFunc = jest.fn();
      const newProps = Object.assign({}, props, { updateUiState: mockFunc });
      const renderedComponent = shallowWithIntl(
        <DisplayProductImage
          {...newProps}
        />
      );
      renderedComponent.instance().onClickNext(mockFunc);
      expect(mockFunc).toHaveBeenCalled();
    });
  });

  describe('onClickPrevious', () => {
    it('should call updateUiState on onClickPrevious', () => {
      const mockFunc = jest.fn();
      const newProps = Object.assign({}, props, { updateUiState: mockFunc });
      const renderedComponent = shallowWithIntl(
        <DisplayProductImage
          {...newProps}
        />
      );
      renderedComponent.instance().onClickPrevious(mockFunc);
      expect(mockFunc).toHaveBeenCalled();
    });
  });

  describe('onClickClose', () => {
    it('should call updateUiState on onClickClose', () => {
      const mockFunc = jest.fn();
      const newProps = Object.assign({}, props, { updateUiState: mockFunc });
      const renderedComponent = shallowWithIntl(
        <DisplayProductImage
          {...newProps}
        />
      );
      renderedComponent.instance().onClickClose();
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
