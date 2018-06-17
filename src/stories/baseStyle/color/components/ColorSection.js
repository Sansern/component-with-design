import React from 'react';
import styled from 'styled-components';
import Typography from '../../../../shared/components/Typography';

const Section = styled.div`
  padding-bottom: 60px;
`;

const HeadLine = props => <Typography variant="headlineFive" {...props} />

const SubHeadLine = props => <Typography variant="headlineSix" {...props} />

const ColorSection = ({ children }) => {
  console.log('children', children);
  return (
    <Section>
      <HeadLine>Brand Color</HeadLine>
      <SubHeadLine>The color theme that reflects the brand or style.</SubHeadLine>
      <div>
        {children}
      </div>
    </Section>
  );
};

export default ColorSection;
