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

const policyUrl = 'http://help.target.com/help/subcategoryarticle?childcat=Return+policy&parentcat=Returns+%26+Exchanges&searchQuery=search+help';

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
