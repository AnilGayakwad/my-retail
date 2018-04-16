import { FormattedMessage } from 'react-intl';
import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';

import {
  makeSelectProductReviewsByProductId,
 } from 'common/state/ProductDetails/selectors';
import ReviewSummary from 'components/ReviewSummary';

import {
  ProConColumn,
  ProConContainer,
  ProConSubtitle,
  ProConTitle,
  SummaryRow,
  SummaryStars,
  ViewAllLink,
} from './styles';
import messages from './messages';

export class Ratings extends Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { productReviews } = this.props;
    const {
      totalReviews,
      consolidatedOverallRating: overallRating,
     } = productReviews;
    const productReviewsIsEmpty = Object.keys(this.props.productReviews).length;
    const conReview = productReviewsIsEmpty ? productReviews.Con[0] : {};
    const proReview = productReviewsIsEmpty ? productReviews.Pro[0] : {};

    return !productReviewsIsEmpty ? null : (
      <div>
        <SummaryRow>
          <div className="sr-only">
            <FormattedMessage {...messages.overallAria} values={{ count: overallRating }} />
          </div>
          <div aria-hidden>
            <SummaryStars>
              <ReactStars
                color1="#999"
                color2="#cc0000"
                count={5}
                edit={false}
                value={overallRating}
              />
            </SummaryStars>
            <strong>
              <FormattedMessage {...messages.overall} />
            </strong>
          </div>
          <ViewAllLink>
            <FormattedMessage
              {...messages.viewAllLink}
              values={{
                reviewCount: totalReviews,
              }}
            />
          </ViewAllLink>
        </SummaryRow>
        <ProConContainer>
          <div>
            <ProConColumn>
              <ProConTitle>
                <FormattedMessage {...messages.proTitle} />
              </ProConTitle>
              <div className="sr-only">
                <FormattedMessage {...messages.proSubtitleAria} />
              </div>
              <ProConSubtitle aria-hidden>
                <FormattedMessage {...messages.proSubtitle} />
              </ProConSubtitle>
              <hr aria-hidden />
              <ReviewSummary
                datePosted={proReview.datePosted}
                overallRating={proReview.overallRating}
                review={proReview.review}
                screenName={proReview.screenName}
                title={proReview.title}
              />
            </ProConColumn>
            <ProConColumn>
              <ProConTitle>
                <FormattedMessage {...messages.conTitle} />
              </ProConTitle>
              <div className="sr-only">
                <FormattedMessage {...messages.conSubtitleAria} />
              </div>
              <ProConSubtitle aria-hidden>
                <FormattedMessage {...messages.conSubtitle} />
              </ProConSubtitle>
              <hr aria-hidden />
              <ReviewSummary
                datePosted={conReview.datePosted}
                overallRating={conReview.overallRating}
                review={conReview.review}
                screenName={conReview.screenName}
                title={conReview.title}
              />
            </ProConColumn>
          </div>
        </ProConContainer>
      </div>
    );
  }
}

Ratings.propTypes = {
  productReviews: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  productReviews: makeSelectProductReviewsByProductId(),
});

export default withRouter(connect(mapStateToProps)(Ratings));
