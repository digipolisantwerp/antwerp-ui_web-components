import { Component, Prop, Host, h } from '@stencil/core';

@Component({
	tag: 'cookie-content-blocker',
	styleUrl: 'content-blocker.scss'
})
export class ContentBlocker {
	/** The title */
	@Prop() title: string;
	/** The description */
	@Prop() description: string;
	/** Name of the FontAwesome icon you want to show */
	@Prop() icon: string;
	/** This will add a classname to the component wrapper */
	@Prop() branding: string = "aui";

	openCookiePreferences() {
		const cookieConsentElement = document.querySelector('cookie-consent');
		cookieConsentElement.openPreferences = true;
	}

	render() {
		return (
			<Host class={this.branding}>
				<div class="content-blocker">
					{this.icon &&
					<div class="row center-xs u-margin-bottom-xs">
						<div class="col-xs-4">
							<span class={"fa " + this.icon}></span>
						</div>
					</div>
					}
					<div class="row center-xs u-margin-bottom-xs">
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
							<button class="a-button a-button--transparent" onClick={() => this.openCookiePreferences()}>Open cookie instellingen</button>
						</div>
					</div>
				</div>
			</Host>
		);
	}

}
