/**
*
* Returns
*
*/

import React from 'react';
import { FormattedMessage } from 'react-intl';

import verticalLine from './icons/verticalLine.png';
import {
  Container,
  Header,
  Message,
  PolicyLink,
} from './styles';
import messages from './messages';

const policyUrl = 'http://www.target.com/HelpContent?help=/sites/html/TargetOnline/help/returns_and_refunds/returns_and_refunds.html';

function Returns() {
  return (
    <Container>
      <Header>
        <FormattedMessage {...messages.header} />
      </Header>
      <div >
        <img src={verticalLine} alt="" />
      </div>
      <Message>
        <FormattedMessage
          {...messages.message}
          values={{
            policyLink: <PolicyLink href={policyUrl}>
              <FormattedMessage {...messages.returnPolicy} />
            </PolicyLink>,
          }}
        />
      </Message>
    </Container>
  );
}

Returns.propTypes = {
};

export default Returns;
