import styled from 'styled-components';

const desktopBreakpoint = '701px';

export const LeftColumn = styled.div`
  @media (min-width: ${desktopBreakpoint}) {
    clear: left;
    float: left;
    padding-right: 2rem;
    width: 50%
  }
`;

export const RightColumn = styled.div`
  @media (min-width: ${desktopBreakpoint}) {
    float: right;
    width: 50%
  }
`;

export const Price = styled.span`
  font-size: 1.875rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const PriceContainer = styled.div`
  margin-bottom: 2rem;
`;

export const PriceQualifier = styled.span`
  color: #808080;
  font-size: .75rem;
  margin-left: .5rem;
  text-transform: lowercase;
`;
