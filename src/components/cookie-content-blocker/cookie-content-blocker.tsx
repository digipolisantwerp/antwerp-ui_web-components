import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'aui-cookie-content-blocker',
  styleUrl: 'cookie-content-blocker.scss'
})
export class ContentBlocker {
  /** The content blocker title */
  @Prop() message: string;
  /** A paragraph text to explain the content blocker title */
  @Prop() description: string;
  /** The icon name (eg: ai-close) */
  @Prop() icon: string;
  /** Extra CSS class(es) to add */
  @Prop() branding: string = 'aui';

  openCookiePreferences() {
    const cookieConsentElement = document.querySelector('aui-cookie-consent');
    cookieConsentElement.openPreferences = true;
  }

  render() {
    return (
      <Host class={this.branding}>
        <div class="m-card m-card--gray">
          <div class="u-text-center u-margin">
            {this.icon &&
              <aui-icon name={this.icon} branding="h2 u-margin-bottom-xs" />
            }
            <h3 class="h6">{this.message}</h3>
            <p class="u-margin-bottom-xs">{this.description}</p>
            <button class="a-button a-button--transparent" onClick={() => this.openCookiePreferences()}>Open cookie-instellingen</button>
          </div>
        </div>
      </Host>
    );
  }

}
