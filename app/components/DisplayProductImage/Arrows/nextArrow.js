/**
*
* NextArrow
*
*/
import PropTypes from 'prop-types';
import React from 'react';
import { injectIntl, intlShape } from 'react-intl';

import { StyledNextIcon } from './styles';
import messages from './messages';

export function NextArrow(props) {
  return (
    <StyledNextIcon
      disabled={props.currentSlide === (props.slideCount - 1)}
      {...props}
      alt={props.intl.formatMessage(messages.nextAltText)}
    />
  );
}

NextArrow.propTypes = {
  currentSlide: PropTypes.number,
  intl: intlShape,
  slideCount: PropTypes.number,
};

export default injectIntl(NextArrow);
