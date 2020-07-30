import '@storybook/addon-notes/register-panel';
import '@storybook/addon-viewport/register';
import { addons } from '@storybook/addons';
import acpaasUITheme from './acpaasUITheme';

addons.setConfig({
  theme: acpaasUITheme,
});
