import React from 'react'

import { ButtonComponent } from 'components/Button'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'
import GlobalStyles from 'styles/global'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ButtonComponent size="large">Button</ButtonComponent>
      <GlobalStyles/>
    </ThemeProvider>
  )
}

export default App
