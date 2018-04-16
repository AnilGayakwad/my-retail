 import { all, takeLatest, put } from 'redux-saga/effects';
 import itemJsonData from 'containers/data/item-data.json';
 import {
  PRODUCT_DETAILS_REQUESTED,
} from './constants';
 import {
  productDetailsRequestSucceeded,
  productDetailsRequestFailed,
} from './actions';

 export function* watchProductDetailsRequested() {
   yield takeLatest(PRODUCT_DETAILS_REQUESTED, fetchProductDetails);
 }

 export function* fetchProductDetails(action) {
   const { productId } = action.meta;
   try {
     /* "yield call" to be made with fetch to get data from Api call, just for demo inserting the result with itemJsonData */
     yield put(productDetailsRequestSucceeded(itemJsonData, productId));
   } catch (error) {
     yield put(productDetailsRequestFailed(error, productId));
   }
 }

 // All sagas to be loaded
 export default function* initSagas() {
   yield all([
     watchProductDetailsRequested(),
   ]);
 }
