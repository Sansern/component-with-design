const addPxForNumber = number =>
  typeof number === 'number' ? `${number}px` : number;

const createTypographyStyle = (fontSize, lineHeight, otherTypoStyles = {}) => {
  const {
    letterSpacing = 'normal',
    fontFamily = 'Poppins',
    fontWeight = 'normal'
  } = otherTypoStyles;
  return {
    fontFamily,
    lineHeight,
    fontWeight,
    fontSize: `${fontSize}px`,
    letterSpacing: addPxForNumber(letterSpacing)
  };
};

export const headline = createTypographyStyle(96, 1.3, {
  letterSpacing: -1.5,
  fontWeight: 300
});

export const headlineTwo = createTypographyStyle(60, 1.3, {
  letterSpacing: -0.5,
  fontWeight: 300
});

export const headlineThree = createTypographyStyle(48, 1.3, {
  letterSpacing: -0.5,
  fontWeight: 300
});

export const headlineFour = createTypographyStyle(34, 1.3, {
  letterSpacing: 0.3
});

export const headlineFive = createTypographyStyle(24, 'normal');

export const headlineSix = createTypographyStyle(14, 1.3, {
  letterSpacing: 0.8,
  fontWeight: 500
});

export const subtitle = createTypographyStyle(16, 1.5, {
  letterSpacing: 0.2
});

export const subtitleTwo = createTypographyStyle(14, 'normal', {
  letterSpacing: 0.1,
  fontWeight: 500
});

export const body = createTypographyStyle(14, 1.3, {
  letterSpacing: 0.8,
  fontWeight: 500
});

export const bodyTwo = createTypographyStyle(14, 1.45, {
  letterSpacing: 0.3,
  fontWeight: 'normal'
});

export const button = createTypographyStyle(14, 1.3, {
  letterSpacing: 0.8,
  fontWeight: 500
});

export const caption = createTypographyStyle(12, 1.3, {
  letterSpacing: 0.4,
  fontWeight: 'normal'
});

export const overline = createTypographyStyle(10, 1.6, {
  letterSpacing: 1.5,
  fontWeight: 500
});

export default {
  headline,
  headlineTwo,
  headlineThree,
  headlineFour,
  headlineFive,
  headlineSix,
  subtitle,
  subtitleTwo,
  body,
  bodyTwo,
  button,
  caption,
  overline
};
