import styled from 'styled-components';
import tagSVG from './icons/tag.svg';

export const PromotionContainer = styled.li`
  position: relative;
`;

export const Promotion = styled.div`
  color: #cc0000;
  margin-left: 1rem;
  padding-left: .5rem;

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: .3rem;
    left: 0;
    width: 1rem;
    height: 1rem;
    background-size: contain;
    background-image: url(${tagSVG});
    background-repeat: no-repeat;
  }
`;

export const PromotionList = styled.ul`
  padding: 0;
  position: relative;
  list-style-type: none;
`;
