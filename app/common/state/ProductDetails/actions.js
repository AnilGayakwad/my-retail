/*
 *
 * ProductDetailsPage actions
 *
 */

import {
  PRODUCT_DETAILS_REQUESTED,
  PRODUCT_DETAILS_REQUEST_SUCCEEDED,
  PRODUCT_DETAILS_REQUEST_FAILED,
} from './constants';

export function productDetailsRequested(productId) {
  return {
    type: PRODUCT_DETAILS_REQUESTED,
    meta: {
      productId,
    },
  };
}

export function productDetailsRequestSucceeded(result, productId) {
  return {
    type: PRODUCT_DETAILS_REQUEST_SUCCEEDED,
    payload: {
      result,
    },
    meta: {
      productId,
    },
  };
}

export function productDetailsRequestFailed(error, productId) {
  return {
    type: PRODUCT_DETAILS_REQUEST_FAILED,
    payload: {
      error,
    },
    meta: {
      productId,
    },
    error: true,
  };
}
