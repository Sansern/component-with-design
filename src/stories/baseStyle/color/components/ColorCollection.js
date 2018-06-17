import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '../../../../shared/components/Typography';

const Section = styled.div``;

const HeadLine = props => <Typography variant="headlineFive" {...props} />

const SubHeadLine = props => <Typography variant="headlineSix" {...props} />

const ColorContainer = styled.div`
  width: 1024px;
  padding-top: ${({theme}) => theme.spacing[3]};
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const ColorCollectionPropTypes = {
  colorType: PropTypes.string,
  description: PropTypes.string
};

const ColorCollection = ({ children, type, description }) => {
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

ColorCollection.propTypes = ColorCollectionPropTypes;

export default ColorCollection;
