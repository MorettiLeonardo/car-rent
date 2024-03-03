import styled from 'styled-components'
import { colors } from '../../styles'

type Props = {
  color: 'black' | 'orange'
  padding?: string
}

export const Btn = styled.button<Props>`
  cursor: pointer;
  border: none;
  color: ${colors.white};
  font-weight: 600;
  font-size: 16px;
  background-color: ${colors.orange};
  background-color: ${(props) =>
    props.color === 'orange' ? colors.orange : colors.black};
  padding: ${(props) => (props.padding ? props.padding : '16px')};
  border-radius: 4px;
  box-shadow: ${(props) =>
    props.color === 'orange' ? '0 10px 15px 0 rgba(255, 83, 48, 0.3)' : ''};
  transition: 0.4s;

  &:hover {
    box-shadow: ${(props) =>
      props.color === 'orange' ? '0 10px 15px 0 rgba(255, 83, 48, 0.45)' : ''};
  }
`
