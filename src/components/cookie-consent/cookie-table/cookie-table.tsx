import { Component, Prop, h } from '@stencil/core';

@Component({
	tag: 'aui-cookie-table',
})
export class CookieTable {
	@Prop() data: any[];

	loadCookieTableBody = (data) => {
		return data.cookies.map((cookie) =>
			<tr>
				<td>{cookie.cookie}</td>
				<td>{cookie.type}</td>
				<td>{cookie.duration}</td>
				<td>
					{cookie.description}
					{cookie.subCookies &&
						<table class="a-table__sub-table u-margin-top-xs">
							{cookie.subCookies.map((subCookie) =>
								<tr>
									<td>{subCookie.name}</td>
									<td>{subCookie.duration}</td>
								</tr>
							)}
						</table>
					}
				</td>
			</tr>
		)
	}

	render() {
		return (
			<div class="a-table__wrapper-responsive">
				<table class="a-table a-table--small a-table--primary">
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
		);
	}
}
