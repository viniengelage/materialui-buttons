import React from 'react'
import { StageSpinner } from 'react-spinners-kit'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconName, library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'

import { Container, LoadingContainer, Icon, IconContainer } from './styles'

library.add(fas)

export interface ThemeProps {
  title: string;
  colors: {
    primary: string;
    background?: string;
    main?: string;
  }
}

export interface ButtonProps {
  theme?: object;
  backgroundColor?: string
  icon?: IconName
  size?: 'small' | 'medium' | 'large'
  loading?: boolean
  type?: 'button' | 'submit' | 'reset'
  variant?: 'normal' | 'icon'
  cursor?: 'info' | 'click'
  onClick?: () => void
}

const ButtonComponent: React.FC<ButtonProps> = ({
  size = 'medium',
  type = 'button',
  backgroundColor,
  children,
  icon,
  variant = 'normal',
  loading = false,
  cursor = 'click',
  theme,
  onClick,
  ...props
}) => {
  return (
    <ThemeProvider theme={theme}>
      {variant === 'normal' && loading && (
        <LoadingContainer
          cursor={cursor}
          size={size}
          style={{ backgroundColor }}
          {...props}
        >
          <StageSpinner size={30} loading color='#fff' />
        </LoadingContainer>
      )}
      {variant === 'normal' && !loading && (
        <Container
          size={size}
          type={type}
          cursor={cursor}
          style={{ backgroundColor }}
          onClick={onClick}
          {...props}
        >
          {icon && <FontAwesomeIcon icon={icon} size='sm' color='#fff' />}
          {children}
        </Container>
      )}
      {variant === 'icon' && (
        <IconContainer
          onClick={onClick}
          style={{ backgroundColor }}
          size={size}
          cursor={cursor}
          {...props}
        >
          <Icon icon={icon || 'paper-plane'} />
        </IconContainer>
      )}
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default ButtonComponent;
