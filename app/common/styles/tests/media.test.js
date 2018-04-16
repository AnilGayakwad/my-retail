import { createMediaQueries } from '../media';

describe('create media queries ', () => {
  const mediaSizes = {
    heavy: '1000',
    ton: '2000',
  };
  const mediaQueries = createMediaQueries(mediaSizes);

  const styles = `
    color: white;
    border: 1px solid red;
  `;

  const mediaQueryHeavy = '@media (min-width:';

  describe('template literal maker ', () => {
    const heavyStyles = mediaQueries.heavy`${styles}`;
    const mediaStyles = heavyStyles.map((el) => el.trim());
    const [styleParent, value, heavyUnit, styleContent, styleConclusion] = mediaStyles;

    it('should set media queries with max-width', () => {
      expect(styleParent).toBe(mediaQueryHeavy);
    });

    it('should set the value of the media query to 1000', () => {
      expect(value).toEqual(mediaSizes.heavy);
    });

    it('should set the unit of the media query', () => {
      expect(heavyUnit.includes('px')).toEqual(true);
    });

    it('should set the content of the media query styles', () => {
      expect(styleContent).toEqual(styles.trim());
    });

    it('should conclude the media query', () => {
      expect(styleConclusion).toEqual('}');
    });
  });
});
