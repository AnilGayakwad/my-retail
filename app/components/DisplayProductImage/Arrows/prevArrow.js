/**
*
* PrevArrow
*
*/
import PropTypes from 'prop-types';
import React from 'react';
import { injectIntl, intlShape } from 'react-intl';

import { StyledPrevIcon } from './styles';
import messages from './messages';

export function PrevArrow(props) {
  return (
    <StyledPrevIcon
      disabled={props.currentSlide === 0}
      {...props}
      alt={props.intl.formatMessage(messages.previousAltText)}
    />
  );
}

PrevArrow.propTypes = {
  currentSlide: PropTypes.number,
  intl: intlShape,
};

export default injectIntl(PrevArrow);
