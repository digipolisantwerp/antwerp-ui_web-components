import { newE2EPage } from '@stencil/core/testing';

describe('cookie-content-blocker', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<aui-cookie-content-blocker></aui-cookie-content-blocker>');

    const element = await page.find('aui-cookie-content-blocker');
    expect(element).toHaveClass('hydrated');
  });
});
