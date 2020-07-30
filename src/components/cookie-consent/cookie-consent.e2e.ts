import { newE2EPage } from '@stencil/core/testing';

describe('aui-cookie-consent', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<aui-cookie-consent></aui-cookie-consent>');
    const element = await page.find('aui-cookie-consent');
    expect(element).toHaveClass('hydrated');
  });
});
