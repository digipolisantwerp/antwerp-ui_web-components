import { newE2EPage } from '@stencil/core/testing';

describe('cookie-content-blocker', () => {
	it('renders', async () => {
		const page = await newE2EPage();
		await page.setContent('<aui-icon name="ai-wench-1"></aui-icon>');

		const element = await page.find('aui-icon');
		expect(element).toHaveClass('hydrated');
	});
});
