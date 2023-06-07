import { Component, Listen, Prop, State, h } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'aui-cookie-table',
})
export class CookieTable {
  @Prop() data: any[];

  @State() leftShadow: boolean = false;
  @State() rightShadow: boolean = false;

  tableRef!: HTMLElement;

  @Listen('resize', { target: 'window' })
  handleResize() {
    this.handleScroll();
  }

  componentDidLoad() {
    this.handleScroll();
  }

  handleScroll() {
    const el = this.tableRef.scrollLeft;
    const width = this.tableRef.scrollWidth - this.tableRef.clientWidth;
    this.leftShadow = (el <= 0) ? false : true;
    this.rightShadow = (el < width) ? true : false;
  }

  loadCookieTableBody = (data) => {
    return data.cookies.map((cookie) =>
      <tr>
        <td>{cookie.cookie}</td>
        <td>{cookie.type}</td>
        <td>{cookie.duration}</td>
        <td>
          {cookie.description}
          {cookie.subCookies &&
            <table class="a-table a-table--open u-margin-top-xxs">
              {cookie.subCookies.map((subCookie) =>
                <tr class="is-condensed">
                  <td class="is-condensed">{subCookie.name}</td>
                  <td class="is-condensed">{subCookie.duration}</td>
                </tr>
              )}
            </table>
          }
        </td>
      </tr>
    )
  }

  render() {
    const tableClasses = classNames('a-table-responsive-wrapper',{
      'has-shadow-left': this.leftShadow,
      'has-shadow-right': this.rightShadow,
    });

    return (
      <div class={tableClasses}>
        <div class="a-table-scrollable-wrapper" onScroll={() => this.handleScroll()} ref={(el) => this.tableRef = el as HTMLElement}>
          <table class="a-table">
            <thead>
              <tr>
                <th>Cookie</th>
                <th>Type</th>
                <th>Duur</th>
                <th>Omschrijving</th>
              </tr>
            </thead>
            <tbody>
              {this.loadCookieTableBody(this.data)}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
