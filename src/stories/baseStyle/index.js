import React from 'react';
import { ThemeProvider } from 'styled-components';
import { storiesOf, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import TypographyPage from './typography';
import Typography, { TypographyTag } from '../../shared/components/Typography';
import CardProfile from './card/components/CardProfile';
import ColorPage from './color';
import Avatar from './card/components/Avatar';

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
  .add('Avatar', () => {
    const exampleImage = 'https://reactjs.org/logo-og.png';
    return <Avatar src={exampleImage} />;
  })
  .add('Profile', () => {
    return <CardProfile />;
  })

