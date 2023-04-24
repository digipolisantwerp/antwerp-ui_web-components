import { ContentBlocker } from './cookie-content-blocker';

describe('cookie-content-blocker', () => {
	it('builds', () => {
		expect(new ContentBlocker()).toBeTruthy();
	});
});
