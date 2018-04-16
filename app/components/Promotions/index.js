/**
*
* Promotions
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import {
  Promotion,
  PromotionContainer,
  PromotionList,
} from './styles';

function Promotions({ promotions }) {
  return (
    <PromotionList>
      {
        promotions.map((promotion, index) => (
          <PromotionContainer key={index.toString()}>
            <Promotion>
              {promotion.Description[0].shortDescription}
            </Promotion>
          </PromotionContainer>
        ))
      }
    </PromotionList>
  );
}

Promotions.propTypes = {
  promotions: PropTypes.array.isRequired,
};

export default Promotions;
