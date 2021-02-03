# viniengelage-materialui-button

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/viniengelage-materialui-button.svg)](https://www.npmjs.com/package/viniengelage-materialui-button) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save viniengelage-materialui-button
```

## Usage

```tsx
import React from 'react'

import { ButtonComponent, ButtonProps } from 'components/Button'

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return <ButtonComponent {...rest}>{children}</ButtonComponent>
}

export default Button;

```

## License

MIT © [viniengelage](https://github.com/viniengelage)
