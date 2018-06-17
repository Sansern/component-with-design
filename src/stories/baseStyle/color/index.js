import React from 'react';
import styled from 'styled-components';
import ColorSection from './components/ColorSection';
import ColorCollection from './components/ColorCollection';
import Color from './components/Color';

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: #fafafa;
  padding: ${({theme}) => theme.spacing[3]}
`;

function ColorPage() {
  return (
    <Wrapper>
      <ColorSection type="Brand Color" description="The color theme that reflects the brand or style.">
        <ColorCollection name="Primary">
          <Color
            colorName="primary"
            rgbColor={{
              red: 124,
              green: 46,
              blue: 46
            }}
          />
        </ColorCollection>
        <ColorCollection name="Secondary">
          <Color
            colorName="secondary"
            rgbColor={{
              red: 124,
              green: 46,
              blue: 46
            }}
          />
        </ColorCollection>
      </ColorSection>
      <ColorSection type="UI Color System" description="The color theme that prefer the standard UI.">
        <ColorCollection name="Neural">
          <Color
            colorName="white"
            rgbColor={{
              red: 255,
              green: 255,
              blue: 255
            }}
          />
          <Color
            colorName="gray"
            rgbColor={{
              red: 145,
              green: 145,
              blue: 145
            }}
          />
          <Color
            colorName="grayTwo"
            rgbColor={{
              red: 204,
              green: 204,
              blue: 204
            }}
          />
          <Color
            colorName="grayThree"
            rgbColor={{
              red: 219,
              green: 219,
              blue: 219
            }}
          />
          <Color
            colorName="grayFour"
            rgbColor={{
              red: 234,
              green: 234,
              blue: 234
            }}
          />
          <Color
            colorName="grayFive"
            rgbColor={{
              red: 242,
              green: 242,
              blue: 242
            }}
          />
        </ColorCollection>
        <ColorCollection name="Logic">
          <Color
            colorName="error"
            rgbColor={{
              red: 255,
              green: 53,
              blue: 53
            }}
          />
          <Color
            colorName="success"
            rgbColor={{
              red: 76,
              green: 217,
              blue: 100
            }}
          />
          <Color
            colorName="info"
            rgbColor={{
              red: 0,
              green: 122,
              blue: 255
            }}
          />
          <Color
            colorName="warning"
            rgbColor={{
              red: 255,
              green: 149,
              blue: 0
            }}
          />
        </ColorCollection>
      </ColorSection>
    </Wrapper>
  );
}

export default ColorPage;
