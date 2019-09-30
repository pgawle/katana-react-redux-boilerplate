import { addParameters, configure } from '@storybook/react';
import storybookTheme from './storybookTheme';
const req = require.context('./stories', true, /\.stories\.js$/);

addParameters({
  options: {
    isFullScreen: false,
    showNav: true,
    showPanel: false,
    theme: storybookTheme
  }
});

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
