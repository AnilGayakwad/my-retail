/*
 *
 * ProductDetailsPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  UI_STATE,
} from './constants';

const initialState = fromJS({
  productDetailsPage: {
    imageToDisplay: 0,
    showLargeImages: false,
    photoIndex: 0,
    quantitySelected: 1,
  },
});

function UiStateReducer(state = initialState, action) {
  switch (action.type) {
    case UI_STATE: {
      return state
        .set('productDetailsPage', fromJS(action.payload));
    }
    default:
      return state;
  }
}

export default UiStateReducer;
