import React from 'react';
import styled from 'styled-components';
import Typography from '../../../shared/components/Typography';

const exampleText = 'A peep at some distant orb has power to raise and purify our thoughts like a strain of sacred music, or a noble picture, or a passage from the grander poets. It always does one good.';

const Wrapper = styled.div`
  padding: ${props => props.theme.spacing[2]}
`;

const Section = styled.div`
  padding-bottom: ${props => props.theme.spacing[12]}
`;

const HeadLine = props => <Typography variant="headlineFive" {...props} />

const TypographyExample = ({ variant, name }) => (
  <Section>
    <HeadLine>{name || variant}</HeadLine>
    <Typography children={exampleText} variant={variant} />
  </Section>
)

function TypographyPage() {
  return (
    <Wrapper>
      <TypographyExample variant="headline" />
      <TypographyExample variant="headlineTwo" name="headline 2" />
      <TypographyExample variant="headlineThree" name="headline 3" />
      <TypographyExample variant="headlineFour" name="headline 4" />
      <TypographyExample variant="headlineFive" name="headline 5" />
      <TypographyExample variant="headlineSix" name="headline 6" />
      <TypographyExample variant="subtitle" />
      <TypographyExample variant="subtitleTwo" name="subtitle 2" />
      <TypographyExample variant="body" name="body" />
      <TypographyExample variant="bodyTwo" name="body 2" />
      <TypographyExample variant="button" />
      <TypographyExample variant="caption" />
      <TypographyExample variant="overline" />
    </Wrapper>
  );
}

export default TypographyPage;
