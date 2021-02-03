import React from 'react'

import { ThemeProvider } from 'styled-components'
import { ButtonComponent, ButtonProps } from 'components/Button'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <ThemeProvider theme={theme}>
      <ButtonComponent {...rest}>{children}</ButtonComponent>
      <GlobalStyles />
    </ThemeProvider>
)}

export default Button;
