import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Typography from '../../../../shared/components/Typography';

const Wrapper = styled.div``;

const ColorContainer = styled.div`
  display: flex;
  padding-top: ${({theme}) => theme.spacing[2]};
  padding-bottom: ${({theme}) => theme.spacing[4]};
  flex-wrap: wrap;
`;

const ColorCollectionPropTypes = {
  name: PropTypes.string
};

function ColorCollection({ name, children  }) {
  return (
    <Wrapper>
      <Typography variant="caption" children={`${name} Color`} />
      <ColorContainer>
        {children}
      </ColorContainer>
    </Wrapper>
  )
}

ColorCollection.propTypes = ColorCollectionPropTypes;

export default ColorCollection;
