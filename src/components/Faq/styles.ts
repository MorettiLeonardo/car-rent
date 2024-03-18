import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  text-align: center;
  padding: 200px 0;

  > h4 {
    font-size: 24px;
    margin-bottom: 40px;
  }

  > h2 {
    font-size: 32px;
    margin-bottom: 40px;
  }

  > p {
    color: ${colors.gray};
    margin-bottom: 40px;
  }
`

export const QuestionsContainer = styled.div`
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  margin-top: 50px;

  li {
    cursor: pointer;
  }

  .is-close {
    display: none;
  }

  .is-selected {
    background-color: ${colors.orange};
    color: ${colors.white};
    box-shadow: 0 0px 7px 0 ${colors.orange};
  }

  h4,
  p {
    padding: 24px;
    text-align: start;
  }

  h4 {
    transition: 0.3s;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    font-weight: 400;
  }

  p {
    color: ${colors.gray};
    line-height: 22px;
  }
`
