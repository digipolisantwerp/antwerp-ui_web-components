export default {
	title: 'Components/Cookie Content Blocker',
	component: 'aui-cookie-content-blocker',
	render: (args) => {
		const icon = document.createElement(`aui-cookie-content-blocker`);
		for (const [key, value] of Object.entries(args)) {
			icon.setAttribute(key, value);
		}
		return icon;
	},
	argTypes: {
		title: {
			control: { type: 'text' },
      table: {
        type: { summary: 'text' },
        defaultValue: { summary: '' }
      },
      description: 'The content blocker title',
		},
		description: {
			control: { type: 'text' },
      table: {
        type: { summary: 'text' },
        defaultValue: { summary: '' }
      },
      description: 'A paragraph text to explain the content blocker title',
		},
		icon: {
      control: { type: 'select' },
      options: ['ai-video-player', 'ai-a11y1', 'ai-alert-triangle', 'ai-alert-circle', 'ai-advertising-megaphone'],
      table: {
        type: { summary: 'text' },
        defaultValue: { summary: '' }
      },
      description: 'The icon name (eg: ai-close)',
    },
		branding: {
			control: { type: 'text' },
      table: {
        type: { summary: 'text' },
        defaultValue: { summary: 'aui' }
      },
      description: 'Extra CSS class(es) to add',
      defaultValue: 'aui',
		},
	}
};

export const Example = {
  args: {
		title: 'Dit item kan niet getoond worden',
		description: 'De cookies voor YouTube dienen geaccepteerd te worden om de inhoud van dit filmpje te kunnen zien',
    icon: 'ai-video-player',
  },
};
