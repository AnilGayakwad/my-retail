import { createSelector } from 'reselect';

const selectUiStateDomain = () => (state) => state.get('ui');

const makeSelectUiState = () => createSelector(
  selectUiStateDomain(),
  (substate) => substate.toJS()
);

const makeSelectUiForProductDetailsPageState = () => createSelector(
  selectUiStateDomain(),
  (substate) => substate.get('productDetailsPage', {}).toJS()
);

export default makeSelectUiState;
export {
  makeSelectUiForProductDetailsPageState,
};
