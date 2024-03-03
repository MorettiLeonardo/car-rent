import styled from 'styled-components'
import { colors } from '../../styles'

export const Btn = styled.button`
  cursor: pointer;
  border: none;
  color: ${colors.white};
  font-weight: 600;
  background-color: ${colors.orange};
  padding: 16px;
  border-radius: 4px;
  box-shadow: 0 10px 15px 0 rgba(255, 83, 48, 0.3);
  transition: 0.4s;

  &:hover {
    box-shadow: 0 10px 15px 0 rgba(255, 83, 48, 0.45);
  }
`
