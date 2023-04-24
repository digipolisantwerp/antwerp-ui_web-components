import { Component, Prop, Host, Listen, State, Watch, h } from '@stencil/core';
import Cookies from 'js-cookie';
import { isMobile } from 'react-device-detect';
import { createFocusTrap } from 'focus-trap';
import classNames from 'classnames';


import { ConfigInterface } from './cookie-consent.interface';
import { cookieConfig } from '../../services/default.js';
import { Environment } from '../../services/environment.js';

@Component({
	tag: 'aui-cookie-consent',
	styleUrl: 'cookie-consent.scss'
})
export class CookieConsent {
	/** Extra CSS class(es) to add */
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
	@State() openedManually: boolean = false;

	componentRef!: HTMLElement;
	modalRef!: HTMLElement;

	componentWillLoad() {
		this.loadConfig();
		this.checkEnvironment();
		this.checkCookie();
		this.checkExcludedPaths();
	}

	componentDidLoad() {
		if(!this.configData.nonBlocking && !this.hidden) {
			const focusTrap = createFocusTrap(this.componentRef);
			setTimeout(() => focusTrap.activate());
		}
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
		this.openedManually = true;
	}

	@Listen('checkCategory')
	handleCheckCategory(event: CustomEvent<number>) {
		const key = event.detail;
		const newCategories = this.checkedCategories.map((cat, i) => {
			if(key === i) {
				return {...cat, enabled: !cat.enabled};
			}
			return cat;
		})
		this.checkedCategories = [...newCategories];
	}

	@Listen('openCloseCategory')
	handleOpenCloseCategory(event: CustomEvent<number>) {
		const key = event.detail;
		const newCategories = this.checkedCategories.map((cat, i) => {
			if(key === i) {
				return {...cat, open: !cat.open};
			}
			return cat;
		})
		this.checkedCategories = [...newCategories];
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
		if (Cookies.get('cookiepreferences_' + this.currentEnvironment)) {
			cookiePreferences = JSON.parse(Cookies.get('cookiepreferences_' + this.currentEnvironment));
		}

		this.checkedCategories.forEach(function (category) {
			// Make sure cookies from the same subdomain are left untouched
			const index = cookiePreferences.map(e => e.category).indexOf(category.name);
			if(index > -1) {
				cookiePreferences[index].accepted = (type === 'all' ? true : category.enabled);
			} else {
				cookiePreferences = [...cookiePreferences, {
					category: category.name,
					accepted: (type === 'all' ? true : category.enabled)
				}];
			}
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
		let hideWindow = false;
		if (Cookies.get('cookiepreferences_' + this.currentEnvironment)) {
			let cookiePreferences = JSON.parse(Cookies.get('cookiepreferences_' + this.currentEnvironment));
			let checkedCategories = [...this.checkedCategories];
			cookiePreferences.forEach(function (cookiePref) {
				let index = checkedCategories.findIndex((obj => obj.name === cookiePref.category));
				if(checkedCategories[index]){
					hideWindow = true;
					checkedCategories[index].enabled = cookiePref.accepted;
				}
			});
			this.checkedCategories = checkedCategories;
		}
		this.hidden = hideWindow;
	}

	openCookiePreferences() {
		this.hidden = false;
		this.showPreferences = true;
	}

	handleAcceptAll(e) {
		e.preventDefault()
		this.setCookie('all');
		this.hidden = true;
		this.openPreferences = false;
	}

	handleShowPreferences() {
		this.showPreferences = true;
		setTimeout(() => this.modalRef.focus());
	}

	handleHidePreferences() {
		this.showPreferences = false;

		if (this.openedManually) {
			this.hidden = true;
			this.openedManually = false;
			this.openPreferences = false;
		}
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

		return this.checkedCategories.map((category, key) =>
			<aui-cookie-category
				data={category}
				index={key}
			></aui-cookie-category>
		)
	}

	loadPreferences = () => {
		const acceptCookiesWrapperClass = classNames(
			'accept-all-cookies-wrapper',
			'col-xs-12 col-sm-4',
			{
			'u-text-right': !isMobile,
			'u-text-center': isMobile
		});

		return (
			<div>
				<div class="m-modal__body">
					<div class="row u-margin-bottom">
						<div class="col-xs-12 col-sm-8">
							<h1 class="h3 u-margin-bottom-xs">Soorten cookies</h1>
						</div>
						<div class={acceptCookiesWrapperClass}>
							<a role="button" href="#" class="u-margin-bottom-xs" onClick={(e) => this.handleAcceptAll(e)}>Alle cookies toestaan</a>
						</div>
					</div>
					{this.showCategories()}
				</div>
				<div class="m-modal__footer u-margin-top">
					<button class='a-button' onClick={() => this.savePreferences()}>Voorkeuren opslaan</button>
					{this.configData.nonBlocking && (
					 		<button class='a-button a-button--transparent' onClick={() => this.handleHidePreferences()}>Annuleren</button>
					)}
				</div>
			</div>
		)
	}

	render() {
		const overlayClass = classNames('m-overlay',{
			'is-active': !this.hidden,
			'mobile': isMobile
		});

		if (this.configData.nonBlocking && !this.showPreferences && !this.hidden) {
			return (
				<Host class={this.branding}>
					<div class="m-cookie-consent">
						<div class="u-container u-margin-top u-margin-bottom">
							<div class="row">
								<div class="col-xs-12 col-md-9">
									<div class="u-margin-right">
										<h1 class='h3 u-margin-bottom'>{this.configData.title}</h1>
										<p innerHTML={this.configData.intro}></p>
									</div>
								</div>
								<div class="col-xs-12 col-md-3">
									<button
										class='a-button a-button--block u-margin-bottom-xs'
										onClick={() => this.savePreferences()}
									>Noodzakelijke cookies</button>
									<button
										class='a-button a-button--block u-margin-bottom-xs'
										onClick={(e) => this.handleAcceptAll(e)}
									>Alle cookies toestaan</button>
									<button
										class='a-button a-button--transparent a-button--block'
										onClick={() => this.handleShowPreferences()}
									>Stel voorkeuren in</button>
								</div>
							</div>
						</div>
					</div>
				</Host>
			);
		}

		return (
			<Host class={this.branding} tabindex="-1" role='dialog' aria-label="cookiemelding" aria-modal="true" ref={(el) => this.componentRef = el as HTMLElement}>
				<div class={overlayClass}>
					<div class='m-overlay__inner cookieconsent'>
						<div class="m-modal m-modal--large" tabindex={0} ref={(el) => this.modalRef = el as HTMLElement}>
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
												onClick={(e) => this.handleAcceptAll(e)}
											>Alle cookies toestaan</button>
											<button
											class={'a-button a-button--transparent'}
											onClick={() => this.handleShowPreferences()}
											>Stel voorkeuren in</button>
										</div>
									</div>
								) : this.loadPreferences()}
							</div>
						</div>
					</div>
				</div>
			</Host>
		);
	}
}
