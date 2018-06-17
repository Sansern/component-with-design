import React from 'react';
import styled from 'styled-components';
import ColorSection from './components/ColorSection';
import ColorShowCase from './components/ColorShowCase';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fafafa;
`;

function ColorPage() {
  return (
    <Wrapper>
      <ColorShowCase
        colorName="primary"
        rgbColor={{
          red: 124,
          green: 46,
          blue: 46
        }}
      />
      <ColorSection>
        <ColorShowCase
          colorName="primary"
          rgbColor={{
            red: 124,
            green: 46,
            blue: 46
          }}
        />
      </ColorSection>
    </Wrapper>
  );
}

export default ColorPage;
