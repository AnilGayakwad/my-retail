/**
 *
 * ProductDetailsPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators, compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import DisplayProductImage from 'components/DisplayProductImage';
import Ratings from 'components/Ratings';
import Promotions from 'components/Promotions';
import QuantitySelector from 'components/QuantitySelector';
import MainButtons from 'components/MainButtons';
import Returns from 'components/Returns';
import SecondaryButtons from 'components/SecondaryButtons';
import ProductHighlights from 'components/ProductHighlights';
import { makeSelectProductDetailByProductId } from 'common/state/ProductDetails/selectors';
import { productDetailsRequested } from 'common/state/ProductDetails/actions';
import reducer from 'common/state/ProductDetails/reducer';
import saga from 'common/state/ProductDetails/saga';
import {
  LeftColumn,
  RightColumn,
  Price,
  PriceContainer,
  PriceQualifier,
} from './styles';

export class ProductDetailsPage extends React.PureComponent {
  /* istanbul ignore next */
  componentDidMount() {
    const { getProductDetails, productDetails, match } = this.props;
    if (!Object.keys(productDetails).length && match.params.productId) {
      getProductDetails(match.params.productId);
    }
  }

  render() {
    const { productDetails } = this.props;
    return !Object.keys(productDetails).length ? null : (
      <div>
        <Helmet>
          <title>{productDetails.title}</title>
          <meta name="description" content={productDetails.title} />
        </Helmet>
        <LeftColumn>
          <DisplayProductImage />
        </LeftColumn>

        <RightColumn>
          <PriceContainer className="mt-md">
            <Price itemProp="price">
              {productDetails.Offers[0].OfferPrice[0].formattedPriceValue}
            </Price>
            <PriceQualifier>
              {productDetails.Offers[0].OfferPrice[0].priceQualifier}
            </PriceQualifier>
          </PriceContainer>
          <hr aria-hidden />
          <Promotions promotions={productDetails.Promotions} />
          <hr aria-hidden />
          <QuantitySelector />
          <MainButtons purchasingChannelCode={productDetails.purchasingChannelCode} />
          <Returns policy={productDetails.ReturnPolicy[0]} />
          <SecondaryButtons />
          <ProductHighlights highlights={productDetails.ItemDescription[0].features} />
        </RightColumn>

        <LeftColumn>
          <Ratings />
        </LeftColumn>
      </div>
    );
  }
}

ProductDetailsPage.propTypes = {
  getProductDetails: PropTypes.func.isReqired,
  match: PropTypes.object.isRequired,
  productDetails: PropTypes.object.isReqired,
};

const mapStateToProps = createStructuredSelector({
  productDetails: makeSelectProductDetailByProductId(),
});

export const mapDispatchToProps = (dispatch) => bindActionCreators({
  getProductDetails: productDetailsRequested,
}, dispatch);

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'ProductDetails', reducer });
const withSaga = injectSaga({ key: 'ProductDetails', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ProductDetailsPage);
