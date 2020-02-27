import { storiesOf } from '@storybook/html';
import notes from './readme.md';

storiesOf('ContentBlocker', module)
	.add('YouTube', () => `
		<cookie-content-blocker type="youtube" icon="true"></cookie-content-blocker>
	`, { notes })
	.add('Facebook', () => `
		<cookie-content-blocker type="facebook" icon="true"></cookie-content-blocker>
	`, { notes })
	.add('Twitter', () => `
		<cookie-content-blocker type="twitter" icon="true"></cookie-content-blocker>
	`, { notes })
	.add('Instagram', () => `
		<cookie-content-blocker type="instagram" icon="true"></cookie-content-blocker>
	`, { notes })
	.add('Without icon', () => `
		<cookie-content-blocker type="youtube" icon="false"></cookie-content-blocker>
	`, { notes })