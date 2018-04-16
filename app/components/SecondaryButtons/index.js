/**
*
* SecondaryButtons
*
*/

import { FormattedMessage } from 'react-intl';
import React from 'react';

import {
  Button,
  Container,
} from './styles';
import messages from './messages';

function SecondaryButtons() {
  return (
    <Container>
      <Button className="mr-xs">
        <FormattedMessage {...messages.addToRegistry} />
      </Button>
      <Button className="mr-xs">
        <FormattedMessage {...messages.addToList} />
      </Button>
      <Button>
        <FormattedMessage {...messages.share} />
      </Button>
    </Container>
  );
}

export default SecondaryButtons;
