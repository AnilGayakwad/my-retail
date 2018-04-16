/**
*
* QuantitySelector
*
*/

import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { makeSelectUiForProductDetailsPageState } from 'common/state/ui/selectors';
import { updateUiState } from 'common/state/ui/actions';

import {
  Button,
  Container,
  ButtonText,
  Count,
} from './styles';
import messages from './messages';

export class QuantitySelector extends Component {
  updateUiStateObject(upateObj) {
    const { uiState } = this.props;
    this.props.updateUiState({ ...uiState, ...upateObj });
  }

  incrementQuantity = () => {
    const { uiState } = this.props;
    const quantity = uiState.quantitySelected;
    this.updateUiStateObject({ quantitySelected: quantity + 1 });
  }

  decrementQuantity = () => {
    const { uiState } = this.props;
    const quantity = uiState.quantitySelected;
    this.updateUiStateObject({ quantitySelected: quantity - 1 });
  }

  render() {
    const { intl, uiState } = this.props;
    const quantity = uiState.quantitySelected;
    return (
      <Container>
        <FormattedMessage
          tagName="small"
          {...messages.header}
        />
        <span className="sr-only">{quantity}</span>
        <div>
          <Button
            aria-label={intl.formatMessage(messages.decreaseButtonAria, { quantity })}
            disabled={quantity === 1}
            onClick={this.decrementQuantity}
          >
            <ButtonText>
            −
          </ButtonText>
          </Button>
          <Count aria-hidden>
            {quantity}
          </Count>
          <Button
            aria-label={intl.formatMessage(messages.increaseButtonAria, { quantity })}
            onClick={this.incrementQuantity}
          >
            <ButtonText>
            +
            </ButtonText>
          </Button>
        </div>
      </Container>
    );
  }
}

QuantitySelector.propTypes = {
  intl: intlShape.isRequired,
  updateUiState: PropTypes.func.isRequired,
  uiState: PropTypes.object.isRequired,
};


const mapStateToProps = createStructuredSelector({
  uiState: makeSelectUiForProductDetailsPageState(),
});

export function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updateUiState,
  }, dispatch);
}

export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(QuantitySelector));
