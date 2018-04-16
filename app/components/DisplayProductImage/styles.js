import styled from 'styled-components';
import media from 'common/styles/media';

export const CustomHeading = styled.h1`
  font-size: 18px;
  color: #666666;
  text-align: center;
`;

export const CustomImg = styled.img`
  margin: 0 auto;
  width: 100%
`;

export const ZoomImg = styled.img`
  margin: 0 auto;
  width: 1rem
`;

export const ZoomText = styled.div`
  font-size: 11px;
  color: #999999;
  text-align: center;
`;

export const CustomSliderImg = styled.img`
  margin: 0 auto;
  width: 100%
`;

export const dashedGrayBorder = `
  border: #666 0.009375rem dashed;
`;

export const CarouselWrapper = styled.div`
  width: 80%;
  ${media.lg`
    width: 70%;
  `}
`;
