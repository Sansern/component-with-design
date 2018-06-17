import React from 'react';
import styled from 'styled-components';
import Typography from '../../../shared/components/Typography';

const exampleText = 'A peep at some distant orb has power to raise and purify our thoughts like a strain of sacred music, or a noble picture, or a passage from the grander poets. It always does one good.';

const Wrapper = styled.div`
  padding: ${({theme}) => theme.spacing[2]}
`;

const Section = styled.div`
  padding-bottom: ${({theme}) => theme.spacing[9]}
`;

const Header = styled(({className}) => <h2 className={className}><Typography children="Typography" variant="headlineTwo" /></h2>)`
  padding-bottom: ${({theme}) => theme.spacing[12]}
`;

const ExampleSection = styled.div`
  padding-left: ${({theme}) => theme.spacing[6]}
`;

const SubHeadLine = props => <Typography variant="headlineFive" {...props} />

const TypographyExample = ({ variant, name }) => (
  <Section>
    <SubHeadLine>{name || variant}</SubHeadLine>
    <Typography children={exampleText} variant={variant} />
  </Section>
)

function TypographyPage() {
  return (
    <Wrapper>
      <Header />
      <ExampleSection>
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
      </ExampleSection>
    </Wrapper>
  );
}

export default TypographyPage;
