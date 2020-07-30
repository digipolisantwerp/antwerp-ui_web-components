import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
	namespace: 'acpaas-ui',
	srcDir: 'src',
	copy: [
		{ src: 'services' }
	],
	plugins: [
		sass()
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
			serviceWorker: null // disable service workers
		}
	]
};
