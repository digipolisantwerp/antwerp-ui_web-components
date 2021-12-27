import { Component, Prop, h } from '@stencil/core';
import { isMobile } from 'react-device-detect';

@Component({
	tag: 'aui-cookie-category',
})
export class CookieCategory {
	@Prop() data: any[];
	@Prop() index: number;
	@Prop() onOpenCloseCategory: Function;
	@Prop() onCheckCategory: Function;

	onKeyPress = (e, target, index) => {
    const enter =
      e.key === "Enter" ||
      e.which === 13;
    if (enter) {
			switch(target) {
				case "category":
					this.onOpenCloseCategory(index)
					break;
				case "toggle":
					e.target.checked = !e.target.checked;
					this.onCheckCategory(index, e);
					break;
			}
    }
  };

	loadCategoryItem = (item) => {
		return (
			<div class="category-item">
				<div class="category-item-nav u-bg-light u-margin-bottom-xs">
					<div class="row">
						<div class="col-xs-6 category-item-name">
							<h2 class="h6" role="button" tabindex={0} onClick={() => this.onOpenCloseCategory(this.index)} onKeyDown={(e) => this.onKeyPress(e, "category", this.index)}>
                <aui-icon branding="u-margin-right-xs u-margin-left-xs" name={`ai-arrow-${item.open ? 'down' : 'right'}-1`}></aui-icon> {item.name}
              </h2>
						</div>
						<div class="col-xs-6 u-text-right">
							<div class="a-input">
								<div class={item.showSwitch && "a-switch"}>
									<label class="a-switch__label u-margin-right-xs">
										{((item.showSwitch && !isMobile) && ((item.enabled ? "In" : "Uit") + "geschakeld"))}
										{(!item.showSwitch && "Altijd ingeschakeld")}
									</label>
									{item.showSwitch && (
                    <button
                      class="a-switch__button u-margin-right-xs"
                      id={"switch-" + item.name}
                      role="switch"
                      aria-checked={item.enabled.toString()}
                      onClick={(e) => this.onCheckCategory(this.index, e)}
                      onKeyDown={(e) => this.onKeyPress(e, "toggle", this.index)}>
                    </button>
                  )}
									{item.showSwitch && (
                    <label class="u-screen-reader-only" htmlFor={"switch-" + item.name}>
                      <span>Toggle switch</span>
                    </label>
                  )}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class={"category-item-description " + (item.open ? "open" : "")}>
					<p class="u-margin-bottom-xs">{item.description}</p>
					{item.cookies &&
						<aui-cookie-table data={item}></aui-cookie-table>
					}
				</div>
			</div>
		);
	}

	render() {
		return (
			this.loadCategoryItem(this.data)
		);
	}
}
