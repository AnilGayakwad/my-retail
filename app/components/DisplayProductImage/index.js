import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl, FormattedMessage } from 'react-intl';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Slider from 'react-slick';
import ViewLargerImage from 'components/ViewLargerImage';

import { makeSelectUiForProductDetailsPageState } from 'common/state/ui/selectors';
import { updateUiState } from 'common/state/ui/actions';

import {
  makeSelectProductTitleByProductId,
  makeSelectProductImagesByProductId,
 } from 'common/state/ProductDetails/selectors';

import NextArrow from './Arrows/nextArrow';
import PrevArrow from './Arrows/prevArrow';
import zoomIcon from './icons/zoom.png';
import messages from './messages';
import {
  CustomHeading,
  CustomImg,
  CustomSliderImg,
  CarouselWrapper,
  ZoomImg,
  ZoomText,
} from './styles';

export class DisplayProductImage extends Component {
  onImageChange = (index) => {
    this.updateUiStateObject({ imageToDisplay: index, photoIndex: index });
  }

  onClickNext = () => {
    const { uiState, productImages } = this.props;
    this.updateUiStateObject({ photoIndex: ((uiState.photoIndex + (productImages.length - 1)) % productImages.length) });
  }

  onClickPrevious = () => {
    const { uiState, productImages } = this.props;
    this.updateUiStateObject({ photoIndex: ((uiState.photoIndex + 1) % productImages.length) });
  }

  onClickClose = () => {
    this.updateUiStateObject({ showLargeImages: false });
  }

  setFocusOnHeading = (elem) => {
    if (elem) {
      elem.focus();
    }
  }

  viewLargerImage = () => {
    this.updateUiStateObject({ showLargeImages: true });
  }

  updateUiStateObject(upateObj) {
    const { uiState } = this.props;
    this.props.updateUiState({ ...uiState, ...upateObj });
  }

  render() {
    const { productTitle, productImages, uiState } = this.props;
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerPadding: '5px',
      arrow: true,
      centerMode: true,
      afterChange: this.onImageChange,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      focusOnSelect: true,
    };

    const images = productImages && productImages.length && productImages.map((item) => (
       item.image
    ));

    return (
      <div>
        <CustomHeading
          className="mb-md"
          innerRef={this.setFocusOnHeading}
          tabIndex="-1"
        >
          {productTitle}
        </CustomHeading>

        {
          productImages && productImages.length &&
          <div>
            <CustomImg
              src={productImages[uiState.imageToDisplay].image}
              alt=""
            />
            <ZoomText onClick={this.viewLargerImage} className="mv-sm">
              <ZoomImg
                src={zoomIcon}
                alt=""
              />
              <FormattedMessage {...messages.viewLarger} />
            </ZoomText>
            <CarouselWrapper className="mt-md mh-xl">
              <Slider
                {...settings}
              >
                {
                productImages.map((item, index) => (
                  <div>
                    <CustomSliderImg alt={index.toString()} src={item.image} />
                  </div>
                ))
               }
              </Slider>

            </CarouselWrapper>

            {
              uiState.showLargeImages &&
              <ViewLargerImage
                images={images}
                photoIndex={uiState.photoIndex}
                moveNext={this.onClickNext}
                movePrevious={this.onClickPrevious}
                onClose={this.onClickClose}
              />
          }
          </div>
        }
      </div>
    );
  }
}

DisplayProductImage.propTypes = {
  uiState: PropTypes.object.isRequired,
  productImages: PropTypes.array.isRequired,
  productTitle: PropTypes.string.isRequired,
  updateUiState: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  productTitle: makeSelectProductTitleByProductId(),
  productImages: makeSelectProductImagesByProductId(),
  uiState: makeSelectUiForProductDetailsPageState(),
});

export function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updateUiState,
  }, dispatch);
}

export default withRouter(injectIntl(connect(mapStateToProps, mapDispatchToProps)(DisplayProductImage)));
