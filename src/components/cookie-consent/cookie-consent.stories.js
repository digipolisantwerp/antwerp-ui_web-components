import { storiesOf } from '@storybook/html';
import notes from './readme.md';

storiesOf('CookieConsent', module)
	.add('Cookie consent', () => `
		<aui-cookie-consent></aui-cookie-consent>
	`, { notes })
