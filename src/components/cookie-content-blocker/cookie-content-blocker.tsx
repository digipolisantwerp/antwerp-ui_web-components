import { Component, Prop, Host, h } from '@stencil/core';

@Component({
	tag: 'aui-cookie-content-blocker',
	styleUrl: 'cookie-content-blocker.scss'
})
export class ContentBlocker {
	/** The content blocker title */
	@Prop() title: string;
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
				<div class="content-blocker u-bg-light">
					{this.icon &&
						<div class="row center-xs u-margin-bottom-xs u-margin-top">
							<div class="col-xs-4">
								<aui-icon name={this.icon} />
							</div>
						</div>
					}
					<div class="row center-xs u-margin-bottom-xs u-margin-top">
						<div class="col-xs-12">
							{this.icon ? (
								<h3 class="h6">{this.title}</h3>
							) : (
								<b>{this.title}</b>
							)}
						</div>
					</div>
					<div class="row center-xs u-margin-bottom-xs">
						<div class="col-xs-12">
							<p>{this.description}</p>
						</div>
					</div>
					<div class="row center-xs">
						<div class="col-xs-12">
							<button class="a-button a-button--transparent u-margin-bottom" onClick={() => this.openCookiePreferences()}>Open cookie-instellingen</button>
						</div>
					</div>
				</div>
			</Host>
		);
	}

}