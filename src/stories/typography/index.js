import React from 'react';
import { ThemeProvider } from 'styled-components';
import { storiesOf, addDecorator  } from '@storybook/react';
import TypographyPage from './components/TypographyPage';

import theme from '../../shared/styles/theme';

const ThemeProviderWrapper = storyFn => (
  <ThemeProvider theme={theme}>
    { storyFn() }
  </ThemeProvider>
);

addDecorator(ThemeProviderWrapper);

storiesOf('Base Style', module).add('Typography', () => {
  return <TypographyPage />;
});



