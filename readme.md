# Installation

To install this library run:

```bash
npm install @acpaas-ui/cookie
```
NOTE: Make sure you have a .npmrc file in the root of your project with the following code: 
```javascript
registry=https://nexusrepo.antwerpen.be/repository/npm-all/
```

# Important note

To use these web components in your project, please follow the steps explained in the following guide: https://stenciljs.com/docs/overview

# cookie-consent

```html
<cookie-consent></cookie-consent>
```

## Properties

| Property           | Attribute          | Description                                                                                                                 | Type       | Default     |
| ------------------ | ------------------ | --------------------------------------------------------------------------------------------------------------------------- | ---------- | ----------- |
| `branding`         | `branding`         | This will add a classname to the component wrapper                                                                          | `string`   | `"aui"`     |
| `config`           | `config`           | Configuration of your cookie consent window                                                                                 | `string`   | `undefined` |
| `domain`           | `domain`           | Set the domain where you want your cookiepreferences to be saved. eg. 'antwerpen.be'                                        | `string`   | `undefined` |
| `environment`      | `environment`      | Set the current environment, this will impact the name of the cookie where the preferences will be saved. eg. 'acceptance' | `string`   | `undefined` |
| `openPreferences`  | `open-preferences` | If set to true, the modal will show the cookie preferences and not the default screen with the title and description        | `boolean`  | `undefined` |
| `preferencesSaved` | --                 | Runs when new cookie preferences are saved                                                                                  | `Function` | `undefined` |

Example of config JSON object:
```json
{
	"title": "Welkom!",
	"intro": "Antwerpen.be maakt gebruik van cookies. Aan de hand van die cookies verzamelt en analyseert Antwerpen.be informatie over uw bezoek. Genieten van een optimale A-ervaring? Bevestig met alle cookies toestaan. Stel voorkeuren in en bepaal welke informatie u met Antwerpen deelt. Houd er rekening mee dat bepaalde media enkel beschikbaar zijn indien u de cookies ervan aanvaardt. Antwerpen.be bewaart cookievoorkeuren. U kan ze aanpassen via cookies beheren. Meer weten? Raadpleeg onze Cookieverklaring. Antwerpen.be waardeert uw vertrouwen en wenst u een verrijkende surfervaring toe!",
	"cookieConfig": [
		{
			"name": "Noodzakelijk",
			"showSwitch": false,
			"enabled": true,
			"description": "Analytische cookies verzamelen algemene informatie over de manier waarop onze website wordt gebruikt. Op basis van deze informatie kunnen wij een statische analyse maken van het gebruik van de website. Op basis van deze analyse kunnen wij de structuur, navigatie en inhoud van onze website gebruiksvriendelijker maken en verbeteren.",
			"open": false
		},
		{
			"name": "Functioneel",
			"showSwitch": true,
			"enabled": true,
			"description": "Analytische cookies verzamelen algemene informatie over de manier waarop onze website wordt gebruikt. Op basis van deze informatie kunnen wij een statische analyse maken van het gebruik van de website. Op basis van deze analyse kunnen wij de structuur, navigatie en inhoud van onze website gebruiksvriendelijker maken en verbeteren.",
			"open": false
		},
		{
			"name": "Analytics",
			"showSwitch": true,
			"enabled": false,
			"description": "Analytische cookies verzamelen algemene informatie over de manier waarop onze website wordt gebruikt. Op basis van deze informatie kunnen wij een statische analyse maken van het gebruik van de website. Op basis van deze analyse kunnen wij de structuur, navigatie en inhoud van onze website gebruiksvriendelijker maken en verbeteren.",
			"open": false,
			"cookies": [
				{
					"cookie": "Google analytics",
					"type": "Eerste partij",
					"duration": "1 minuut tot 2 jaar",
					"description": "Via deze cookies krijgt antwerpen.be onder meer informatie over het aantal (unieke) bezoekers, de bezoekerssessies, hoe de bezoekers de site gebruiken en via welk kanaal (sociale media, zoekrobots, etc.) antwerpen.be werd bereikt. Google Analytics geeft vervolgens inzicht in deze data aan de hand van een analyserapport. Lees hier het privacybeleid van Google.",
					"subCookies": [
						{
							"name": "__utma",
							"duration": "2 jaar"
						},
						{
							"name": "__utmb",
							"duration": "30 min"
						},
						{
							"name": "__utmt",
							"duration": "10 min"
						},
						{
							"name": "__utmz",
							"duration": "6 maanden"
						},
						{
							"name": "_ga",
							"duration": "2 jaar"
						},
						{
							"name": "_gat",
							"duration": "1 min"
						},
						{
							"name": "_gid",
							"duration": "1 dag"
						}
					]
				},
				{
					"cookie": "Youtube VISITOR_INFO1_LIVE",
					"type": "Derde partij",
					"duration": "5 maanden",
					"description": "YouTube, een website voor het plaatsen en het delen van video’s, gebruikt cookies om data te verzamelen van individuele bezoekers en om na te gaan welke functies of voorkeuren door bepaalde gebruikers werden geselecteerd. Lees hier het privacybeleid van YouTube."
				}
			]
		},
		{
			"name": "Marketing",
			"showSwitch": true,
			"enabled": false,
			"description": "Analytische cookies verzamelen algemene informatie over de manier waarop onze website wordt gebruikt. Op basis van deze informatie kunnen wij een statische analyse maken van het gebruik van de website. Op basis van deze analyse kunnen wij de structuur, navigatie en inhoud van onze website gebruiksvriendelijker maken en verbeteren.",
			"open": false
		}
	]
}
```

# cookie-content-blocker

```html
<cookie-content-blocker title="Video kon niet getoond worden" icon="Je moet je cookievoorkeuren aanpassen om deze video te kunnen afspelen" icon="fa-youtube"></cookie-content-blocker>
```

## Properties

| Property      | Attribute     | Description                                        | Type     | Default     |
| ------------- | ------------- | -------------------------------------------------- | -------- | ----------- |
| `branding`    | `branding`    | This will add a classname to the component wrapper | `string` | `"aui"`     |
| `description` | `description` | The description                                    | `string` | `undefined` |
| `icon`        | `icon`        | Name of the FontAwesome icon you want to show      | `string` | `undefined` |
| `title`       | `title`       | The title                                          | `string` | `undefined` |



# Development of this library

## Getting Started

To start up the app run:

```bash
npm start
```

To build the components for production, run:

```bash
npm run build
```

To run the unit tests for the components, run:

```bash
npm test
```

Need help? Check out Stenciljs docs [here](https://stenciljs.com/docs/my-first-component).

##	Styling

Check out the documentation and how to use the core branding [here](https://a-ui.github.io/core_branding_scss/). 

Check out the documentation and how to use flexboxgrid [here](http://flexboxgrid.com/).

> Note that you are free to use your own grid, as long as it meets our branding guidelines.

## Storybook

To start the Storybook component library in your browser, run:

```bash
npm run storybook
```

##	Adding a component to Storybook

Go inside the folder of the component you would like to document and create a new file called {component-name}.stories.js.

Now inside that file, if your web component doesn't use an impertitive API and you don't need to call methods on it, I've found the easiest way to write stories is using plain old strings:

```javascript
import { storiesOf } from '@storybook/html';
import notes from './readme.md';

storiesOf('Component', module)
  .add('Small', () => `
    <my-component type="small"></my-component>
  `, { notes })
  .add('Large', () => `
    <my-component type="large"></my-component>
  `, { notes });
```

You can read the Storybook documentation [here](https://storybook.js.org/docs/basics/introduction/).

## Creating Components

The Stencil CLI can generate new components for you. If you used one of the starters, you can simply run the generate npm script in your project, which will start the interactive generator.

```bash
npm run generate
```

Or you can invoke the Stencil CLI directly with the generate command (g for short). If you don't have stencil installed globally, prefix the command with npx.

```bash
stencil generate
```

## Publishing Components

- [Publish to NPM](https://docs.npmjs.com/getting-started/publishing-npm-packages)
- Put a script tag similar to this `<script src='https://unpkg.com/my-component@0.0.1/dist/mycomponent.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

## Author(s)

- [Wim Vanhorenbeeck](https://github.com/wimvanhorenbeeck)

## License

[MIT](./LICENSE.md)

Copyright (c) 2020-present, Digipolis
