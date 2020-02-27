import { newE2EPage } from '@stencil/core/testing';

describe('cookie-consent', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<cookie-consent></cookie-consent>');
    const element = await page.find('cookie-consent');
    expect(element).toHaveClass('hydrated');
  });
});
