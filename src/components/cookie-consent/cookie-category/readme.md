# aui-cookie-category



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type     | Default     |
| -------- | --------- | ----------- | -------- | ----------- |
| `data`   | --        |             | `any[]`  | `undefined` |
| `index`  | `index`   |             | `number` | `undefined` |


## Events

| Event               | Description | Type                  |
| ------------------- | ----------- | --------------------- |
| `checkCategory`     |             | `CustomEvent<number>` |
| `openCloseCategory` |             | `CustomEvent<number>` |


## Dependencies

### Used by

 - [aui-cookie-consent](..)

### Depends on

- [aui-icon](../../icon)
- [aui-cookie-table](../cookie-table)

### Graph
```mermaid
graph TD;
  aui-cookie-category --> aui-icon
  aui-cookie-category --> aui-cookie-table
  aui-cookie-consent --> aui-cookie-category
  style aui-cookie-category fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
