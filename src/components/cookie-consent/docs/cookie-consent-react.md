# Cookie Consent in React

## Issue with webcomponents and react
**following the official stenciljs docs:**  
The largest deficiencies that React currently has when it comes to working with standard HTML Custom Elements is that properties that contain non-scalar data (that is, data that is not a string or number) are not passed properly and custom events are not handled properly.


## Example of a custom cookie consent wrapper component

```javascript
npm i react-stencil-wrapper
```


### CookieConsent.js
```JSX
import React from 'react';
import { StencilComponentWrapper } from 'react-stencil-wrapper';

const CookieConsent = ({ }) => {
  const onCookieSave = () => {
    window.location.reload(false);
  }

  return <StencilComponentWrapper
        preferencesSaved={onCookieSave}>
        <cookie-consent></cookie-consent>
        </StencilComponentWrapper>;

};

export default CookieConsent;
```

### App.js

```JSX
import React from 'react';
import CookieConsent from './CookieConsent';


const App = ({ children }) => (
  <div>
    <header></header>
    <section></section>
    <CookieConsent />
  </div>
);

export default App;
```
----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
