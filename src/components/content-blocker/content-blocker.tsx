import { Component, Prop, Host, h, State } from '@stencil/core';
import { TypeInterface } from './content-blocker.interface';
import { Content } from '../../services/content.js';

@Component({
	tag: 'cookie-content-blocker',
	styleUrl: 'content-blocker.scss',
	shadow: true
})
export class ContentBlocker {
	/** Type of content you want to hide. Choose from: 'youtube', 'facebook', 'twitter', 'instagram' */
	@Prop() type: string;
	/** Show or hide icon */
	@Prop() icon: boolean = true;

	@State() currentType: TypeInterface;

	componentWillLoad() {
		this.findContentType();
	}

	findContentType() {
		this.currentType = Content.find(type => type.name === this.type);
	}

	openCookiePreferences() {
		const cookieConsentElement = document.querySelector('cookie-consent');
		cookieConsentElement.openPreferences = true;
	}

	render() {
		return (
			<Host>
				<div class="content-blocker">
					{this.icon &&
					<div class="row center-xs u-margin-bottom-xs">
						<div class="col-xs-4">
							<span class={"fa " + this.currentType.icon}></span>
						</div>
					</div>
					}
					<div class="row center-xs u-margin-bottom-xs">
						<div class="col-xs-12">
							{this.icon ? (
								<h3 class="h6">{this.currentType.title}</h3>
							) : (
								<b>{this.currentType.title}</b>
							)}
						</div>
					</div>
					<div class="row center-xs u-margin-bottom-xs">
						<div class="col-xs-12">
							<p>{this.currentType.description}</p>
						</div>
					</div>
					<div class="row center-xs">
						<div class="col-xs-12">
							<a href="#" onClick={() => this.openCookiePreferences()}>Open cookie instellingen</a>
						</div>
					</div>
				</div>
			</Host>
		);
	}

}
