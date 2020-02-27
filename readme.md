# ACPaaS UI - Web Components

## Introduction

Antwerp City Platform as a Service User Interface (ACPaas UI) is a **component interface library** for building user interfaces and responsive web apps. It's designed to provide developers with functionality and UI/UX patterns that matches the Antwerpen styleguide.

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

###	Styling

The core branding is ready to use in the project.

> Check out the documentation and how to use the core branding [here](https://a-ui.github.io/core_branding_scss/). 

Flexboxgrid is ready to use in the project.

> Check out the documentation and how to use flexboxgrid [here](http://flexboxgrid.com/).

Note that you are free to use your own grid, as long as it meets our branding guidelines.

## Storybook

To start the Storybook component library in your browser, run:

```bash
npm run storybook
```

###	Adding a component to Storybook

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
