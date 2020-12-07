import { Component, Prop, Host, State, Watch, h } from '@stencil/core';
import Cookies from 'js-cookie';
import { isMobile } from 'react-device-detect';
import classNames from 'classnames';


import { ConfigInterface } from './cookie-consent.interface';
import { cookieConfig } from '../../services/default.js';
import { Environment } from '../../services/environment.js';

@Component({
	tag: 'aui-cookie-consent',
	styleUrl: 'cookie-consent.scss'
})
export class CookieConsent {
	/** This will add a classname to the component wrapper */
	@Prop() branding: string = 'aui';
	/** Configuration of your cookie consent window */
	@Prop() config: string;
	/** If set to true, the modal will show the cookie preferences and not the default screen with the title and description */
	@Prop() openPreferences: boolean;
	/** Set the current enovironment, this will impact the name of the cookie where the preferences will be saved. eg. 'acceptance' */
	@Prop() environment: string;
	/** Set the domain where you want your cookiepreferences to be saved. eg. 'antwerpen.be' */
	@Prop() domain: string;
	/** Single path or comma seperated list of paths on which the cookie consent will not open */
	@Prop() excludedpaths: string;
	/** Runs when new cookie preferences are saved */
	@Prop() preferencesSaved: Function;

	@State() configData: ConfigInterface;
	@State() hidden: boolean = false;
	@State() showPreferences: boolean = false;
	@State() checkedCategories: any[];
	@State() currentEnvironment: string;

	componentWillLoad() {
		this.loadConfig();
		this.checkEnvironment();
		this.checkCookie();
		this.checkExcludedPaths();
	}

	@Watch('config')
	parseMyObjectProp(newValue: string) {
		if (newValue) this.configData = JSON.parse(newValue);
		this.checkedCategories = this.configData.cookieConfig;
	}

	@Watch('openPreferences')
	watchHandler(newValue: boolean) {
		this.checkCookie();
		this.hidden = !newValue;
		this.showPreferences = newValue;
	}

	checkExcludedPaths() {
		if(this.excludedpaths && this.excludedpaths.length > 0){
			const excludedPaths = this.excludedpaths.split(",");
			if(excludedPaths.indexOf(window.location.pathname) > -1) {
				this.hideModal();
			}
		}
	}

	loadConfig() {
		if (this.config) {
			this.parseMyObjectProp(this.config);
		} else {
			this.configData = cookieConfig;
			this.checkedCategories = this.configData.cookieConfig;
		}
	}

	checkEnvironment() {
		if (this.environment) {
			this.currentEnvironment = this.environment;
		} else {
			this.currentEnvironment = Environment.getEnvironment();
		}
	}

	setCookie(type?: string) {
		let cookiePreferences = [];
		this.checkedCategories.forEach(function (category) {
			cookiePreferences = [...cookiePreferences, {
				category: category.name,
				accepted: (type === 'all' ? true : category.enabled)
			}];
		})
		Cookies.set('cookiepreferences_' + this.currentEnvironment,
			cookiePreferences,
			{ domain: this.domain || window.location.hostname, expires: 365 }
		);
		if (this.preferencesSaved) {
			this.preferencesSaved(cookiePreferences);
		}
	}

	checkCookie() {
		if (Cookies.get('cookiepreferences_' + this.currentEnvironment)) {
			this.hidden = true;
			let cookiePreferences = JSON.parse(Cookies.get('cookiepreferences_' + this.currentEnvironment));

			let checkedCategories = [...this.checkedCategories];
			cookiePreferences.forEach(function (cookiePref) {
				let index = checkedCategories.findIndex((obj => obj.name === cookiePref.category));
				checkedCategories[index].enabled = cookiePref.accepted;
			});
			this.checkedCategories = checkedCategories;
		}
	}

	openCookiePreferences() {
		this.hidden = false;
		this.showPreferences = true;
	}

	handleAcceptAll() {
		this.setCookie('all');
		this.hidden = true;
		this.openPreferences = false;
	}

	handleShowPreferences() {
		this.showPreferences = true;
	}

	savePreferences() {
		this.setCookie();
		this.hidden = true;
		this.openPreferences = false;
	}

	hideModal() {
		this.hidden = true;
	}

	showCategories = () => {
		const checkCategory = (key, e) => {
			this.checkedCategories = [...this.checkedCategories];
			this.checkedCategories[key].enabled = e.target.checked;
		}
		const handleOpenCloseCategory = (key) => {
			this.checkedCategories = [...this.checkedCategories];
			this.checkedCategories[key].open = !this.checkedCategories[key].open;
		}
		return this.checkedCategories.map((category, key) =>
			<aui-cookie-category
				data={category}
				index={key}
				onCheckCategory={checkCategory}
				onOpenCloseCategory={handleOpenCloseCategory}
			></aui-cookie-category>
		)
	}

	loadPreferences = () => {
		const acceptCookiesWrapperClass = classNames(
			'accept-all-cookies-wrapper',
			'col-xs-12',
			'col-md-4',
			{
      'u-text-right': !isMobile,
      'u-text-center': isMobile
    });

		return (
			<div>
				<div class="m-modal__body">
					<div class={classNames('row', { 'u-margin-bottom': isMobile})}>
						<div class="col-xs-12 col-md-8">
							<h1 class="h3 u-margin-bottom u-margin-right">Soorten Cookies</h1>
						</div>
						<div class={acceptCookiesWrapperClass}>
							<button class="a-button a-button--transparent a-button--tiny" onClick={() => this.handleAcceptAll()}>Alle cookies toestaan</button>
						</div>
					</div>
					{this.showCategories()}
				</div>
				<div class={classNames('m-modal__footer', { 'u-margin-top-lg': isMobile})}>
					<button class='a-button' onClick={() => this.savePreferences()}>Voorkeuren opslaan</button>
				</div>
			</div>
		)
	}

	render() {
		const overlayClass = classNames('m-overlay',{
      'is-active': !this.hidden,
      'mobile': isMobile
		});
		return (
			<Host class={this.branding} role='alert'>
				<div class={overlayClass}>
					<div class='m-overlay__inner cookieconsent'>
						<div class="m-modal m-modal--large">
							<div class="m-modal__content">
								{!this.showPreferences ? (
									<div>
										<div class="m-modal__body">
											<h1 class='h3 u-margin-bottom'>{this.configData.title}</h1>
											<p class='u-margin-bottom' innerHTML={this.configData.intro}></p>
										</div>
										<div class="m-modal__footer">
											<button
												class='a-button u-margin-right'
												onClick={() => this.handleAcceptAll()}
											>Alle cookies toestaan</button>
											<button
											class={'a-button a-button--transparent'}
											onClick={() => this.handleShowPreferences()}
											>Stel voorkeuren in</button>
										</div>
									</div>
								) : this.loadPreferences()
								}
							</div>
						</div>
					</div>
				</div>
			</Host>
		);
	}
}
