import { configure } from '@storybook/react';
import '../src/global-style.css';

function loadStories() {
  require('../src/stories/typography');
}

configure(loadStories, module);
