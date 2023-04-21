import { Component, Event, EventEmitter, Prop, h } from '@stencil/core';

@Component({
	tag: 'aui-cookie-category',
})
export class CookieCategory {
	@Prop() data: any[];
	@Prop() index: number;
	@Event() openCloseCategory: EventEmitter<number>;
	@Event() checkCategory: EventEmitter<number>;

	onKeyPress = (e, target, index) => {
		const enter =
			e.key === "Enter" ||
			e.which === 13;
		if (enter) {
			switch(target) {
				case "category":
					this.openCloseCategory.emit(index)
					break;
			}
		}
	};

	loadCategoryItem = (item) => {
		return (
			<div class="category-item u-margin-bottom-xs">
				<div class="category-item-nav">
					<div class="row">
						<div class="col-xs-12 col-sm-6 category-item-name u-margin-bottom-xs">
							<h2 class="h6" role="button" tabindex={0} onClick={() => this.openCloseCategory.emit(this.index)} onKeyDown={(e) => this.onKeyPress(e, "category", this.index)}>
								<aui-icon branding="u-margin-right-xs" name={`ai-arrow-${item.open ? 'down' : 'right'}-1`}></aui-icon> {item.name}
							</h2>
						</div>
						<div class="col-xs-12 col-sm-6 u-text-right">
							{!item.showSwitch && (
								<div class="u-flex">Altijd ingeschakeld</div>
							)}

							<div class={item.showSwitch && "a-switch"}>
								{item.showSwitch && (
								<button
									class="a-switch__button"
									id={"switch-" + item.name}
									role="switch"
									aria-checked={item.enabled.toString()}
									onClick={() => this.checkCategory.emit(this.index)}>
									<span class="a-switch__off">
										{((item.showSwitch) && ((item.enabled ? "In" : "Uit") + "geschakeld"))}
									</span>
								</button>
								)}
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
