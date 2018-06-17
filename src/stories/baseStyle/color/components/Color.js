import React from 'react';
import styled, { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import Typography from '../../../../shared/components/Typography';

const convertRGBMapToString = ({ red, green, blue, alpha = 100 }) => `RGBA ${red} ${green} ${blue} ${alpha}`;

const Sample = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: ${({theme, colorName}) => theme.color[colorName]};
  
`;

const Wrapper = styled.div`
  width: 324px;
  display: flex;
  padding-bottom: ${({theme}) => theme.spacing[4]}
`;

const Name = props => <Typography variant="headlineSix" {...props} />;

const HexCode = props => <Typography variant="bodyTwo" {...props} />;

const RGBCode = props => <Typography variant="bodyTwo" {...props} />;

const Detail = styled.div`
  padding-left: 16px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-around;
`;

const ColorPropTypes = {
  color: PropTypes.string,
  colorName: PropTypes.string,
  rgbColor: PropTypes.object
};

const Color = withTheme(({ colorName, theme, rgbColor }) => {
  return (
    <Wrapper>
      <Sample colorName={colorName} />
      <Detail>
        <Name>{colorName}</Name>
        <HexCode>{theme.color[colorName]}</HexCode>
        <RGBCode>{convertRGBMapToString(rgbColor)}</RGBCode>
      </Detail>
    </Wrapper>
  );
});

Color.propTypes = ColorPropTypes;

export default Color;
