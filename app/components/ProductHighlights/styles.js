import styled from 'styled-components';
import { grayText } from 'common/styles/commonStyles';

export const Heading = styled.h2`
  font-size: 1.875rem;
`;

export const Highlight = styled.li`
  padding: .2rem 0;
`;

export const Highlights = styled.ul`
  font-size: .8rem;
  ${grayText}
  list-style-position: outside;
  margin-left: 1rem;
  padding: 0;

  & strong {
    font-weight: normal !important;
  }
`;
