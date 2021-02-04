import React from 'react';

import ButtonComponent, { ButtonProps } from 'components/Button'

import defaultTheme from 'styles/theme'
// import exampleTheme from 'styles/userTheme'

let theme = defaultTheme;

export function addButtonTheme(userTheme: any) {
  return theme = userTheme;
}

// addButtonTheme(exampleTheme)

const Button:React.FC<ButtonProps> = ({children, ...rest}) => {
  return(
    <ButtonComponent theme={theme} size="default" {...rest}>Button</ButtonComponent>
  )
};

export default Button;
