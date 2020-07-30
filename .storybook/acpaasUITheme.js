import { create } from '@storybook/theming/create';
import logo from './acpaas-ui-logo.svg';

export default create({
  base: 'light',
  colorPrimary: '#01afb8',
  colorSecondary: '#322a56',

  // UI
  appBg: '#f3f3f3',
  appContentBg: '#fff',
  appBorderColor: '#949494',
  appBorderRadius: 0,

  // Typography
  fontBase: '-apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif',
  fontCode: 'Menlo, Monaco, Consolas, "Courier New", monospace',

  // Text colors
  textColor: '#081f2c',
  textInverseColor: '#fff',

  // Toolbar default and active colors
  barTextColor: '#242d9e',
  barSelectedColor: '#322a56',
  barBg: '#fff',

  // Form colors
  inputBg: '#fff',
  inputBorder: '#949494',
  inputTextColor: 'black',
  inputBorderRadius: 0,

  brandTitle: 'ACPaaS UI',
  // brandUrl: 'https://acpaas-ui.digipolis.be',
  brandImage: logo,
});
