/**
*
* ReviewSummary
*
*/

import { FormattedDate, FormattedMessage } from 'react-intl';
import React from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';

import {
  Container,
  ReviewTitle,
  UserLink,
  SummaryStars,
} from './styles';
import messages from './messages';

function ReviewSummary({ datePosted, overallRating, review, screenName, title }) {
  return (
    <Container>
      <div className="sr-only">
        <FormattedMessage {...messages.ratingAria} values={{ count: overallRating }} />
      </div>
      <div aria-hidden>
        <SummaryStars>
          <ReactStars
            color1="#999999"
            color2="#cc0000"
            count={5}
            edit={false}
            value={overallRating}
          />
        </SummaryStars>
      </div>
      <ReviewTitle>{title}</ReviewTitle>
      <p>{review}</p>
      <span className="sr-only">
        <FormattedMessage {...messages.submittedBy} />
      </span>
      <UserLink>
        {screenName}
      </UserLink>
      <FormattedDate
        value={datePosted}
        day="numeric"
        month="long"
        year="numeric"
      />
    </Container>
  );
}

ReviewSummary.propTypes = {
  datePosted: PropTypes.string.isRequired,
  overallRating: PropTypes.string.isRequired,
  review: PropTypes.string.isRequired,
  screenName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ReviewSummary;
