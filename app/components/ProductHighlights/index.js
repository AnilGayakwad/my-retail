/**
*
* ProductHighlights
*
*/

import { FormattedMessage } from 'react-intl';
import React from 'react';
import PropTypes from 'prop-types';

import {
  Heading,
  Highlight,
  Highlights,
} from './styles';
import messages from './messages';

function ProductHighlights({ highlights }) {
  return (
    <div>
      <Heading>
        <FormattedMessage {...messages.header} />
      </Heading>
      <Highlights>
        {
          highlights.map((highlight, index) => (
            <Highlight
              dangerouslySetInnerHTML={{ __html: highlight }}  // eslint-disable-line react/no-danger
              key={index.toString()}
            />
          ))
        }
      </Highlights>
    </div>
  );
}

ProductHighlights.propTypes = {
  highlights: PropTypes.array.isRequired,
};

export default ProductHighlights;
