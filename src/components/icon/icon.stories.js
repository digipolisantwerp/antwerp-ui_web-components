export default {
	title: 'Components/Icon',
	component: 'aui-icon',
	render: ({ ...args }) => {
		const icon = document.createElement(`aui-icon`);
		for (const [key, value] of Object.entries(args)) {
			icon.setAttribute(key, value);
		}
		return icon;
	},
	argTypes: {
		name: {
      control: { type: 'select' },
      options: ['ai-close', 'ai-a11y1', 'ai-alert-triangle', 'ai-arrow-right-1', 'ai-arrow-down-1'],
      table: {
        type: { summary: 'text' },
        defaultValue: { summary: '' }
      },
      description: 'The icon name (eg: ai-close)',
    },
		'aria-label': {
			control: { type: 'text' },
      table: {
        type: { summary: 'text' },
        defaultValue: { summary: '' }
      },
      description: 'The ARIA label',
		},
		branding: {
			control: { type: 'text' },
      table: {
        type: { summary: 'text' },
        defaultValue: { summary: '' }
      },
      description: 'Additional CSS class(es)',
		},
	}
};

export const Example = {
  args: {
    name: 'ai-close',
    'aria-label': 'Close',
		branding: 'h1',
  },
};
