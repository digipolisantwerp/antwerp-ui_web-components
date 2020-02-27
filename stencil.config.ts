import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
	namespace: 'acpaas-web-components',
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
				'cookie-consent',
				'cookie-content-blocker'
			]
		}
	],
	outputTargets: [
		{ 
			type: 'dist',
			esmLoaderPath: '../loader'
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
