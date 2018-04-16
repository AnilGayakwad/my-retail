/**
*
* MainButtons
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import {
  ButtonContainer,
  FindInStoreButton,
  InStoreContainer,
  PrimaryButton,
  SecondaryButton,
} from './styles';
import messages from './messages';

function MainButtons({ purchasingChannelCode }) {
  return (
    <ButtonContainer>
      {
        ['0', '2'].includes(purchasingChannelCode) &&
          <InStoreContainer>
            <SecondaryButton>
              <FormattedMessage {...messages.pickUpInStore} />
            </SecondaryButton>
            <FindInStoreButton>
              <FormattedMessage {...messages.findInStore} />
            </FindInStoreButton>
          </InStoreContainer>
      }
      {
        ['0', '1'].includes(purchasingChannelCode) &&
          <PrimaryButton>
            <FormattedMessage {...messages.addToCart} />
          </PrimaryButton>
      }
    </ButtonContainer>
  );
}

MainButtons.propTypes = {
  purchasingChannelCode: PropTypes.string.isRequired,
};

export default MainButtons;
