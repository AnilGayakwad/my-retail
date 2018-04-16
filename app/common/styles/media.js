import { css } from 'styled-components';

export const sizes = {
  xs: '0',
  sm: '480',
  md: '668',
  lg: '992',
  xl: '1200',
};

/*
returns sizes object with template literal function for all support media queries
*/
export const createMediaQueries = (mediaSizes) => Object.keys(mediaSizes).reduce((accumulator, currentValue) => Object.assign({}, accumulator, {
  [currentValue]: (...args) => css`
    @media (min-width: ${mediaSizes[currentValue]}px) {
      ${css(...args)}
    }
  `,
}), {});

export default createMediaQueries(sizes);
