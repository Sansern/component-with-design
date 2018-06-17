import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '../../../../shared/components/Typography';

const Section = styled.div`
  padding-bottom: 60px;
`;

const HeadLine = props => <Typography variant="headlineFive" {...props} />

const SubHeadLine = props => <Typography variant="headlineSix" {...props} />

const ColorContainer = styled.div`
  width: 1024px;
  padding-top: ${({theme}) => theme.spacing[3]};
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const ColorSectionPropTypes = {
  colorType: PropTypes.string,
  description: PropTypes.string
};

const ColorSection = ({ children, type, description }) => {
  return (
    <Section>
      <HeadLine>{type}</HeadLine>
      <SubHeadLine>{description}</SubHeadLine>
      <ColorContainer>
        {children}
      </ColorContainer>
    </Section>
  );
};

ColorSection.propTypes = ColorSectionPropTypes;

export default ColorSection;
