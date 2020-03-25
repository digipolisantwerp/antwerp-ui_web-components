# acpaas-ui cookie

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

Read the docs [here](src/components/cookie-consent/readme.md)

# cookie-content-blocker

Read the docs [here](src/components/content-blocker/readme.md)


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
