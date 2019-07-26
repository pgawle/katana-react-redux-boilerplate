import { addParameters, configure } from '@storybook/react';
import studioTheme from './studioTheme';
const req = require.context('./stories', true, /\.stories\.js$/);

addParameters({
  options: {
    isFullScreen: false,
    showNav: true,
    showPanel: false,
    theme: studioTheme
  }
});

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
