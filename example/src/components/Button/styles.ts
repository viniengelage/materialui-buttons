import styled, { css } from 'styled-components'
import { darken } from 'polished'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

interface ButtonProps {
  size?: 'default' | 'medium' | 'large' | 'custom';
  cursor: 'info' | 'click';
  width?: number;
  height?: number;
}

export const Container = styled.button<ButtonProps>`
  background-color: ${(props) => props.theme.colors.primary};
  width: 300px;
  height: 40px;
  outline: none;
  border: none;
  border-radius: 3px;
  color: #fff;
  font-weight: 500;
  font-size: 14px;
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
    props.size === 'medium' &&
    css`
      width: 320px;
      height: 50px;
      font-size: 16px;
    `}
  ${(props) =>
    props.size === 'large' &&
    css`
      width: 350px;
      height: 60px;
      font-size: 18px;
    `}

    ${(props) =>
    props.size === 'custom' && props.height && props.width &&
    css`
      width: ${props.width}px;
      height: ${props.height}px;
      font-size: 14px;
    `}

    ${(props) =>
    props.theme &&
    css`
      &:hover {
        background-color: ${darken(0.1, props.theme.colors.primary)};
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
      background-color: ${darken(0.1, props.theme.colors.primary)};
    `}
  width: 300px;
  height: 40px;
  outline: none;
  border: none;
  border-radius: 3px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.size === 'medium' &&
    css`
      width: 320px;
      height: 50px;
      font-size: 16px;
    `}
  ${(props) =>
    props.size === 'large' &&
    css`
      width: 350px;
      height: 60px;
      font-size: 18px;
    `}

    ${(props) =>
    props.size === 'custom' && props.height && props.width &&
    css`
      width: ${props.width}px;
      height: ${props.height}px;
      font-size: 14px;
    `}

    ${(props) =>
    props.theme &&
    css`
      &:hover {
        background-color: ${darken(0.2, props.theme.colors.primary)};
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
    props.size === 'medium' &&
    css`
      width: 40px;
      height: 40px;
    `}
  ${(props) =>
    props.size === 'large' &&
    css`
      width: 64px;
      height: 64px;
    `}

  ${(props) =>
  props.size === 'custom' && props.height && props.width &&
  css`
    width: ${props.width}px;
    height: ${props.height}px;
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
