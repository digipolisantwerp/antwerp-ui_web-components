# ACPaaS UI - Web Components

## Introduction

Antwerp City Platform as a Service User Interface (ACPaas UI) is a **component interface library** for building user interfaces and responsive web apps. It's designed to provide developers with functionality and UI/UX patterns that matches the Antwerpen styleguide.


## Ecosystem

This library is part of [ACPaaS UI](https://acpaas-ui.digipolis.be).


## Getting Started

### Running the project locally

```shell
npm i
npm start
```

### Use ACPaaS UI web components in your project

```shell
npm install @acpaas-ui/web-components
```

> Scroll down for a list with all available components.

To integrate these web components in your framework of choice, please [follow the steps explained here](https://stenciljs.com/docs/overview).

Use polyfills for older browers and browsers that not support web components. To make ACPaaS UI work in these browsers, you need to include the following scripts before you load your web component:

```html
<script src="//cdn.polyfill.io/v2/polyfill.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/2.4.3/webcomponents-bundle.js"></script>
```

Take a look at the component documentation below to learn how to use each component.


## Components

This library contains the following components:

| Name               | Documentation                                                |
| ------------------ | ------------------------------------------------------------ |
| content-blocker    | [Documentation](./src/components/cookie-consent/readme.md)   |
| cookie-consent     | [Documentation](./src/components/content-blocker/readme.md)  |


## Styling

Use [one of our brandings](https://github.com/a-ui/) to adhere to the styling guidelines:

```html
// Antwerp core branding
<link rel="stylesheet" href="https://cdn.antwerpen.be/core_branding_scss/4.1.1/main.min.css">

// Digipolis
<link rel="stylesheet" href="https://cdn.antwerpen.be/digipolis_branding_scss/4.1.1/main.min.css">

// ACPaaS
<link rel="stylesheet" href="https://cdn.antwerpen.be/acpaas_branding_scss/4.1.1/main.min.css">
```

If needed, you can add a branding-compatible [flexbox grid layout system](https://github.com/a-ui/core_flexboxgrid_scss):

```html
<link rel="stylesheet" href="https://cdn.antwerpen.be/core_flexboxgrid_scss/1.0.1/flexboxgrid.min.css">
```

For other styling-related things, like e.g. favicons, [check out GitHub](https://github.com/a-ui/).


## Development

### Creating Components

The Stencil CLI can generate new components for you. If you used one of the starters, you can simply run the generate npm script in your project, which will start the interactive generator.

```shell
npm run generate
```

Or you can invoke the Stencil CLI directly with the generate command (g for short). If you don't have stencil installed globally, prefix the command with npx.

```shell
stencil generate
```

Need more help? Check out [the Stencil.js documentation](https://stenciljs.com/docs/my-first-component).

### Storybook

To start the Storybook component library in your browser, run:

```shell
npm run storybook
```

To add a component to Storybook, go inside the folder of the component you would like to document and create a new file called `<component-name>`.stories.js.

Now inside that file, if your web component doesn't use an impertitive API and you don't need to call methods on it, the easiest way to write stories is using plain old strings:

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

More documentation can be found [on the Storybook website](https://storybook.js.org/docs/basics/introduction/).


## Testing

### Test automation

If you want to start automating your tests, you can have a look at our [Test Automation Guide](./TEST_AUTOMATION.md) for some tips on how to use data-attributes to keep your tests stable and maintainable.

### Cross Browser Testing

We are using [Browserstack Live](https://www.browserstack.com/live) to make sure that our components work correctly on all major browsers and platforms.<br/>
The people at Browserstack kindly offer an unlimited testing program, free of charge for open source projects so a big thanks to them!

<a href="http://browserstack.com/"><img width="250" src="https://cloud.githubusercontent.com/assets/7864462/12837037/452a17c6-cb73-11e5-9f39-fc96893bc9bf.png" alt="Browserstack logo"></a>


## Changelog

Detailed changes for each release are documented in the [changelog](./CHANGELOG.md).


## Questions

For questions and support please ask a question on the [#acpaas-ui slack channel](https://digantcafe.slack.com/messages/CDDLYJU65/). If you're not yet a member of our DigAnt Café slack community, you can easily [join here](https://digantcafe-slack.digipolis.be).

If you stumble across a bug or missing feature, feel free to [report an issue](https://github.com/digipolisantwerp/acpaas-ui_web-components/issues).


## Author(s)

- [Wim Vanhorenbeeck](https://github.com/wimvanhorenbeeck)


## License

[MIT](./LICENSE.md)

Copyright (c) 2020 Digipolis
