# Contributing Guide

Pull requests are always welcome, however keep the following things in mind:

- New features (both breaking and non-breaking) should always be discussed with the [repo's owner](README.md/#support). If possible, please open an issue first to discuss what you would like to change.
- Fork this repo and issue your fix or new feature via a pull request.
- Please make sure to update tests as appropriate. Also check possible linting errors and update the CHANGELOG if applicable.

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
    <aui-component type="small"></aui-component>
  `, { notes })
  .add('Large', () => `
    <aui-component type="large"></aui-component>
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
