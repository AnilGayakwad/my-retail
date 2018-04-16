/*
 *
 * ProductDetailsPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  PRODUCT_DETAILS_REQUESTED,
  PRODUCT_DETAILS_REQUEST_SUCCEEDED,
  PRODUCT_DETAILS_REQUEST_FAILED,
} from './constants';

const initialState = fromJS({
});

function ProductDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUESTED: {
      return state
        .setIn([action.meta.productId, 'error', 'errorKey'], '')
        .setIn([action.meta.productId, 'meta', 'isFetching'], true);
    }
    case PRODUCT_DETAILS_REQUEST_SUCCEEDED: {
      return state
        .setIn([action.meta.productId, 'map'], fromJS(action.payload.result))
        .setIn([action.meta.productId, 'error', 'errorKey'], '')
        .setIn([action.meta.productId, 'meta', 'isFetching'], false)
        .setIn([action.meta.productId, 'meta', 'lastUpdated'], Date.now());
    }
    case PRODUCT_DETAILS_REQUEST_FAILED: {
      return state
        .setIn([action.meta.productId, 'error', 'errorKey'], 'getProductDetailsFailed')
        .setIn([action.meta.productId, 'meta', 'isFetching'], false);
    }
    default:
      return state;
  }
}

export default ProductDetailsReducer;
