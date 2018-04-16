import styled from 'styled-components';
import media from 'common/styles/media';

import rightArrow from '../icons/grayRightArrow.svg';
import leftArrow from '../icons/grayLeftArrow.svg';

export const dashedGrayBorder = `
  border: #666 0.009375rem dashed;
`;

const arrowButton = `
  height: 3.75rem !important;
  width: 1.875rem !important;
  z-index: 1;
  &:focus {
    ${dashedGrayBorder}
  }
  &::before {
    color: transparent !important;
  }
  margin-top: 1rem;
`;

export const StyledNextIcon = styled.button`
  ${arrowButton}
  background: url(${rightArrow}) no-repeat !important;
  background-size: .5rem !important;
  left: 105%;
  background-size: .5rem !important;

  ${media.md`
    background-size: 1rem !important;
  `}
`;

export const StyledPrevIcon = styled.button`
  ${arrowButton}
  background: url(${leftArrow}) no-repeat !important;
  background-size: .5rem !important;

  ${media.md`
    background-size: 1rem !important;
  `}
`;
