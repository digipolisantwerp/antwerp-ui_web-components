import { storiesOf } from '@storybook/html';
import notes from './readme.md';

storiesOf('Icon', module)
	.add('Default', () => `
		<aui-icon name="ai-wench-1"></aui-icon>
	`, { notes })
	.add('With ariaLabel', () => `
    <aui-icon name="ai-wench-1" aria-label="Wrench icon"></aui-icon>
  `, { notes })
	.add('With custom branding', () => `
    <aui-icon name="ai-wench-1" branding="u-margin-top"></aui-icon>
  `, { notes });
