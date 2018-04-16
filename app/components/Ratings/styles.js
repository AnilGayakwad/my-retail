import styled from 'styled-components';
import { grayText } from 'common/styles/commonStyles';
import media from 'common/styles/media';

export const ProConColumn = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 50%;
`;

export const ProConContainer = styled.div`
  background-color: #f6f5f5;
  padding: 1rem;
`;

export const ProConSubtitle = styled.div`
  font-size: .75rem;
  ${grayText}
`;

export const ProConTitle = styled.div`
  font-size: 1.125rem;
  text-transform: uppercase;
`;

export const SummaryRow = styled.div`
  align-items: baseline;
  display: flex;
  flex: 1 0 auto;
  font-size: .9rem;
  justify-content: space-between;
  padding: 1rem;
`;

export const SummaryStars = styled.div`
  &:first-child {
    display: inline-block;
    margin-right: .5rem;

    & span {
      font-size: 1.2rem !important;
      height: 1.5rem;
      ${media.md`
        font-size: 1.4rem !important;
      `}
      ${media.lg`
        cursor: default !important;
        font-size: 1.875rem !important;
        display: inline-block;
        height: 1.8625rem;
        line-height: 1.875rem;
      `}
    }
  }
`;

export const ViewAllLink = styled.span`
  cursor: pointer;
  font-weight: bold;
`;
