/*
 * Ratings Messages
 *
 * This contains all the text for the Ratings component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  conSubtitle: {
    id: 'app.components.Ratings.conSubtitle',
    defaultMessage: 'most helpful 1–2 star review',
  },
  conSubtitleAria: {
    id: 'app.components.Ratings.conSubtitleAria',
    defaultMessage: 'most helpful 1 to 2 star review',
  },
  conTitle: {
    id: 'app.components.Ratings.conTitle',
    defaultMessage: 'con',
  },
  overall: {
    id: 'app.components.Ratings.overall',
    defaultMessage: 'overall',
  },
  overallAria: {
    id: 'app.components.Ratings.overallAria',
    defaultMessage: 'overall rating {count} out of 5 stars',
  },
  proSubtitle: {
    id: 'app.components.Ratings.proSubtitle',
    defaultMessage: 'most helpful 4–5 star review',
  },
  proSubtitleAria: {
    id: 'app.components.Ratings.proSubtitle',
    defaultMessage: 'most helpful 4 to 5 star review',
  },
  proTitle: {
    id: 'app.components.Ratings.proTitle',
    defaultMessage: 'pro',
  },
  viewAllLink: {
    id: 'app.components.Ratings.viewAllLink',
    defaultMessage: `view all {reviewCount, number} {reviewCount, plural,
      one {review}
      other {reviews}
    }`,
  },
});
