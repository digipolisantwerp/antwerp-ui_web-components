const ENV_IDENTIFIERS = {
	dev: '-o.',
	acc: '-a.',
	local: 'local'
}

function getEnvironment() {
	if (typeof window === 'undefined') {
		return process.env.NODE_ENV;
	}

	const currentUrl = window.location.href;

	const env = Object
		.keys(ENV_IDENTIFIERS)
		.find(key => currentUrl.includes(ENV_IDENTIFIERS[key]));

	return env || 'prod';
}

function getAstadUrl() {
	switch (getEnvironment().toLowerCase()) {
		case 'local': return 'https://www.dev.dcs.antwerpen.be';
		case 'dev': return 'https://www.dev.dcs.antwerpen.be';
		case 'acc': return 'https://www.acc.dcs.antwerpen.be';
		default:
			return 'https://www.antwerpen.be';
	}
}

export const Environment = {
	getEnvironment,
	getAstadUrl
}