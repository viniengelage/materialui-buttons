import React from 'react';

import ButtonComponent, { ButtonProps } from 'components/Button'

export { ButtonProps } from 'components/Button'

import defaultTheme from 'styles/theme'

let theme = defaultTheme;

export function addButtonTheme(userTheme: any) {
  return theme = userTheme;
}

const Button:React.FC<ButtonProps> = ({children, ...rest}) => {
  return(
    <ButtonComponent theme={theme} {...rest}>{children}</ButtonComponent>
  )
};

export default Button;
