import { storiesOf } from '@storybook/html';
import { withKnobs, select } from '@storybook/addon-knobs';
import notes from './readme.md';

storiesOf('CookieConsent', module)
	.addDecorator(withKnobs)
	.add('Cookie consent', () => `
		<aui-cookie-consent></aui-cookie-consent>
	`, { notes })
