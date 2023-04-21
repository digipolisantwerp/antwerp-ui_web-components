import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
	namespace: 'acpaas-ui',
	srcDir: 'src',
	plugins: [
		sass({
			includePaths: ["./node_modules/"],
    })
	],
	bundles: [
		{
			components: [
				'aui-cookie-consent',
				'aui-cookie-content-blocker'
			]
		}
	],
	outputTargets: [
		{
			type: 'dist'
		},
		{
			type: 'docs-readme'
		},
		{
			type: 'www',
			serviceWorker: null,
			copy: [
				{ src: 'services' }
			],
		}
	]
};
