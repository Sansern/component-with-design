import { configure } from '@storybook/react';
import '../src/global-style.css';

function loadStories() {
  require('../src/stories/baseStyle');
}

configure(loadStories, module);
