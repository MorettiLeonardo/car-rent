import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Container = styled.div`
  display: grid;
  column-gap: 32px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 100px 0;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }
  @media (max-width: ${breakpoints.smartphone}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  h3 {
    font-size: 24px;
  }

  span {
    font-weight: normal;
  }

  p {
    color: ${colors.gray};
    line-height: 22px;
  }

  input {
    text-align: start;
    background-color: ${colors.lightGray};
    padding: 16px;
    border: none;
    border-radius: 4px;
  }
`

export const ContactInfo = styled.div`
  p {
    color: ${colors.black};
    margin-top: 8px;
    display: flex;
    gap: 8px;
    align-items: center;
  }

  @media (max-width: ${breakpoints.smartphone}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const ListInfos = styled.ul`
  li {
    margin-top: 16px;
  }

  a {
    color: ${colors.black};
    transition: 0.4s;

    &:hover {
      color: ${colors.primary};
    }
  }
`
