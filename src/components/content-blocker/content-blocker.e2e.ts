import { newE2EPage } from '@stencil/core/testing';

describe('cookie-content-blocker', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cookie-content-blocker></cookie-content-blocker>');

    const element = await page.find('cookie-content-blocker');
    expect(element).toHaveClass('hydrated');
  });
});
