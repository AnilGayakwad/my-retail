import { createSelector } from 'reselect';
import { fromJS } from 'immutable';
/**
 * Direct selector to the ProductDetails state domain
 */
const selectProductDetailsDomain = () => (state) => state.get('ProductDetails');

const makeSelectProductDetails = () => createSelector(
  selectProductDetailsDomain(),
  (substate) => substate.toJS()
);

const makeSelectProductIdFromLocation = () => createSelector(
  (state, props) => props && props.match.params,
  (params) => params.productId
);

const makeSelectProductDetailImmutableByProductId = () => createSelector(
  selectProductDetailsDomain(),
  makeSelectProductIdFromLocation(),
  (productDetails, productId) => productDetails.getIn([productId, 'map', 'CatalogEntryView', 0], fromJS({}))
);

const makeSelectProductDetailByProductId = () => createSelector(
  makeSelectProductDetailImmutableByProductId(),
  (productDetails) => productDetails.toJS()
);

const makeSelectProductTitleByProductId = () => createSelector(
  makeSelectProductDetailImmutableByProductId(),
  (productDetails) => productDetails.get('title', '')
);

const makeSelectProductImagesByProductId = () => createSelector(
  makeSelectProductDetailImmutableByProductId(),
  (productDetails) => [...productDetails.getIn(['Images', 0, 'PrimaryImage'], fromJS([])).toJS(), ...productDetails.getIn(['Images', 0, 'AlternateImages'], fromJS([])).toJS()]
);

const makeSelectProductReviewsByProductId = () => createSelector(
  makeSelectProductDetailImmutableByProductId(),
  (productDetails) => productDetails.getIn(['CustomerReview', 0], fromJS({})).toJS()
);

// const makeSelectProductAllReviewsByProductIdAndSortedByoverallRating = () => createSelector(
//   makeSelectProductReviewsByProductId(),
//   (reviews) => reviews.getIn(['Reviews'], fromJS([])).sort((elOne, elTwo) => elOne.getIn(['overallRating']) - elTwo.getIn(['overallRating'])).toJS(),
// );

// const makeSelectProductHighlightsByProductId = () => createSelector(
//   makeSelectProductDetailImmutableByProductId(),
//   (productDetails) => productDetails.getIn(['ItemDescription', 'features'], fromJS([])).toJS()
// );

// const makeSelectProductPromotionsByProductId = () => createSelector(
//   makeSelectProductDetailImmutableByProductId(),
//   (productDetails) => productDetails.getIn(['Promotions'], fromJS([])).map((promotion) => ({
//     shortDescription: promotion.getIn(['Description', 'shortDescription']),
//   })).toJS()
// );

// const makeSelectProductOfferPriceByProductId = () => createSelector(
//   makeSelectProductDetailImmutableByProductId(),
//   (productDetails) => productDetails.getIn(['Offers', 0, 'OfferPrice', 0], fromJS({})).toJS()
// );

// const makeSelectProductPurchasingChannelCodeIsTrueByProductId = () => createSelector(
//   makeSelectProductDetailImmutableByProductId(),
//   (productDetails) => [0, 1].includes(parseInt(productDetails.getIn(['purchasingChannelCode', '5']), 10))
// );

export default makeSelectProductDetails;
export {
  selectProductDetailsDomain,
  makeSelectProductIdFromLocation,
  makeSelectProductDetailByProductId,
  makeSelectProductTitleByProductId,
  makeSelectProductImagesByProductId,
  makeSelectProductReviewsByProductId,
  // makeSelectProductAllReviewsByProductIdAndSortedByoverallRating,
  // makeSelectProductHighlightsByProductId,
  // makeSelectProductPromotionsByProductId,
  // makeSelectProductOfferPriceByProductId,
  // makeSelectProductPurchasingChannelCodeIsTrueByProductId,
};
