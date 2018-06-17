import React from 'react';
import { ThemeProvider } from 'styled-components';
import { storiesOf, addDecorator  } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import TypographyPage from './typography';
import Typography, { TypographyTag } from '../../shared/components/Typography';
import ColorPage from './color';

import theme from '../../shared/styles/theme';

const ThemeProviderWrapper = storyFn => (
  <ThemeProvider theme={theme}>
    { storyFn() }
  </ThemeProvider>
);

addDecorator(ThemeProviderWrapper);

storiesOf('Base Style', module)
  .add('Typography', () => {
    return <TypographyPage />;
  })
  .add('Typography usage',
    withInfo({
      text: `
        ~~~js
          <Typography> this is text </Typography>
        ~~~
      `,
      source: false,
      propTables: [TypographyTag],
      propTablesExclude: [Typography],
    })(
      () => 
        <Typography noWrap={false}>this is example text.</Typography>
      )
    )
  .add('Color', () => {
    return <ColorPage />;
  })


