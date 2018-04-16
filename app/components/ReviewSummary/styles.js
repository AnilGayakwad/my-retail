import styled from 'styled-components';
import media from 'common/styles/media';

export const Container = styled.div`
  font-size: .75rem;
  margin-right: 1rem;
`;

export const ReviewTitle = styled.div`
  font-weight: bold;
  font-size: 1rem;
`;

export const UserLink = styled.a`
  color: blue;
  margin-right: .3rem;
`;

export const SummaryStars = styled.div`
  &:first-child {
    display: inline-block;

    & span {
      font-size: 1rem !important;

      ${media.md`
        font-size: 1.5rem !important;
      `}
    }
  }
`;
