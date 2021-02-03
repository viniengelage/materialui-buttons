# viniengelage-materialui-button

> A button component crafted with styled-compontents and react-spinner-kit. This a module of Vinicios Engelage's MaterialUI.

[![NPM](https://img.shields.io/npm/v/viniengelage-materialui-button.svg)](https://www.npmjs.com/package/viniengelage-materialui-button) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @viniengelage/materialui-button
```

or

```bash
yarn add @viniengelage/materialui-button
```

## Usage

```jsx
import React from 'react';

import Button from 'components/Button'

const App = () => <Button>Text</Button>

export default Button;

```



### Theme

You can add your own theme, using the function *addButtonTheme*

```jsx
import React from 'react';

import theme from './myTheme';

import Button, { addButtonTheme } from 'components/Button'

addButtonTheme(theme)

const App = () => <Button>Text</Button>

export default Button;

```

You can use this function in your App.js

## License

MIT © [viniengelage](https://github.com/viniengelage)
