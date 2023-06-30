import { Component, Event, EventEmitter, Prop, h } from '@stencil/core';

import { TranslationsInterface } from '../cookie-consent.interface';

@Component({
  tag: 'aui-cookie-category',
})
export class CookieCategory {
  @Prop() data: any[];
  @Prop() index: number;
  @Prop() translations: TranslationsInterface;

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
      <div class="m-cookie-consent__category u-margin-top">
        <div class="m-cookie-consent__category-title">
          <h2 class="h6" role="button" tabindex={0} onClick={() => this.openCloseCategory.emit(this.index)} onKeyDown={(e) => this.onKeyPress(e, "category", this.index)}>
            <aui-icon name={`ai-arrow-${item.open ? 'down' : 'right'}-1`}></aui-icon> {item.name}
          </h2>
          <div class="u-text-right">
            {!item.showSwitch && (
              <p>{this.translations.textAlwaysOn}</p>
            )}
            {item.showSwitch && (
              <button class="a-switch" role="switch" aria-checked={item.enabled.toString()} onClick={() => this.checkCategory.emit(this.index)}>
                <div class="a-switch__label a-switch__label--on" aria-hidden="true">{this.translations.textOn}</div>
                <div class="a-switch__label a-switch__label--off" aria-hidden="true">{this.translations.textOff}</div>
                <div class="a-switch__toggle" aria-hidden="true"></div>
              </button>
            )}
          </div>
        </div>
        {item.open && (
          <div class="m-cookie-consent__category-detail u-margin-top-xs">
            <p class="u-margin-bottom-xs">{item.description}</p>
            {item.cookies &&
              <aui-cookie-table data={item} translations={this.translations}></aui-cookie-table>
            }
          </div>
        )}
      </div>
    );
  }

  render() {
    return (
      this.loadCategoryItem(this.data)
    );
  }
}
