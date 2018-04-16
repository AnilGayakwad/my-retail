import {
  UI_STATE,
} from './constants';

export function updateUiState(payload) {
  return {
    type: UI_STATE,
    payload,
  };
}
