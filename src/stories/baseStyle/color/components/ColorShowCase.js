import React from 'react';
import styled, { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import Typography from '../../../../shared/components/Typography';

const Sample = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: ${({theme, colorName}) => theme.color[colorName]};
`;

const Wrapper = styled.div`
  display: flex;
`;

const convertRGBMapToString = ({ red, green, blue, alpha = 100 }) => `RGBA ${red} ${green} ${blue} ${alpha}`;

const Name = props => <Typography variant="headlineSix" {...props} />

const HexCode = props => <Typography variant="bodyTwo" {...props} />

const RGBCode = props => <Typography variant="bodyTwo" {...props} />

const ColorShowCasePropTypes = {
  color: PropTypes.string,
  colorName: PropTypes.string,
  rgbColor: PropTypes.object
};

const ColorShowCase = withTheme(({ colorName, theme, rgbColor }) => {
  return (
    <Wrapper>
      <Sample colorName={colorName} />
      <Name>{colorName}</Name>
      <HexCode>{theme.color[colorName]}</HexCode>
      <RGBCode>{convertRGBMapToString(rgbColor)}</RGBCode>
    </Wrapper>
  );
});

ColorShowCase.propTypes = ColorShowCasePropTypes;

export default ColorShowCase;
