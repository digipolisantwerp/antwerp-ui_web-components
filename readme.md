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
<script src="//polyfill.io/v3/polyfill.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/2.4.4/webcomponents-bundle.js"></script>
```

Take a look at the component documentation below to learn how to use each component.


## Components

This library contains the following components:

| Name                          | Documentation                                                    |
| ----------------------------- | ---------------------------------------------------------------- |
| aui-cookie-consent            | [Documentation](./src/components/cookie-consent/readme.md)       |
| aui-cookie-content-blocker    | [Documentation](./src/components/content-blocker/readme.md)      |


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


## Changelog

Detailed changes for each release are documented in the [changelog](./CHANGELOG.md).


## Questions

For questions and support please ask a question on the [#acpaas-ui slack channel](https://digantcafe.slack.com/messages/CDDLYJU65/). If you're not yet a member of our DigAnt Café slack community, you can easily [join here](https://digantcafe-slack.digipolis.be).

If you stumble across a bug or missing feature, feel free to [report an issue](https://github.com/digipolisantwerp/acpaas-ui_web-components/issues).


## Contributing

Bug reports and or pull requests are always welcome.
Please read our [contribution guide](CONTRIBUTING.md).

## Support

- [Wim Vanhorenbeeck](https://github.com/wimvanhorenbeeck)


## License

[MIT](./LICENSE.md)

Copyright (c) 2020 Digipolis
