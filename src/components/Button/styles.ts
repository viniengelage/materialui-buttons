import styled, { css } from 'styled-components'
import { shade } from 'polished'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

interface ButtonProps {
  size?: 'small' | 'medium' | 'large'
  cursor: 'info' | 'click'
}

export const Container = styled.button<ButtonProps>`
  background-color: ${(props) => props.theme.colors.primary};
  width: 200px;
  height: 30px;
  outline: none;
  border: none;
  border-radius: 3px;
  color: #fff;
  font-weight: 500;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.75px;
  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
  }
  svg {
    margin-right: 5px;
  }
  ${(props) =>
    props.size === 'large' &&
    css`
      width: 300px;
      height: 40px;
      font-size: 14px;
    `}
  ${(props) =>
    props.size === 'small' &&
    css`
      width: 100px;
      height: 20px;
      font-size: 8px;
    `}
    ${(props) =>
    props.theme &&
    css`
      &:hover {
        background-color: ${shade(0.2, props.theme.colors.primary)};
      }
    `}
    ${(props) =>
    props.cursor === 'info' &&
    css`
      &:hover {
        cursor: default;
      }
    `}
`

export const LoadingContainer = styled.div<ButtonProps>`
  ${(props) =>
    props.theme &&
    css`
      background-color: ${shade(0.3, props.theme.colors.primary)};
    `}
  width: 200px;
  height: 30px;
  outline: none;
  border: none;
  border-radius: 3px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.size === 'large' &&
    css`
      width: 300px;
      height: 40px;
    `}
  ${(props) =>
    props.size === 'small' &&
    css`
      width: 100px;
      height: 20px;
    `}
    ${(props) =>
    props.theme &&
    css`
      &:hover {
        background-color: ${shade(0.2, props.theme.colors.primary)};
      }
    `}
    ${(props) =>
    props.cursor === 'info' &&
    css`
      &:hover {
        cursor: default;
      }
    `}
`

export const IconContainer = styled.div<ButtonProps>`
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 50%;
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
  display: flex;
  filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.25));
  svg {
    width: 16px;
    height: 16px;
  }
  ${(props) =>
    props.size === 'small' &&
    css`
      width: 24px;
      height: 24px;
      svg {
        width: 12px;
        height: 12px;
      }
    `}
  ${(props) =>
    props.size === 'large' &&
    css`
      width: 48px;
      height: 48px;
      svg {
        width: 24px;
        height: 24px;
      }
    `}
  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
  }
  ${(props) =>
    props.cursor === 'info' &&
    css`
      &:hover {
        cursor: default;
      }
    `}
`

export const Icon = styled(FontAwesomeIcon)`
  color: #ffff;
`
