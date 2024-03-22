import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 200px;
  padding-bottom: 150px;

  > h4 {
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 40px;
  }

  > h2 {
    font-size: 44px;
    margin-bottom: 40px;
  }

  p {
    color: ${colors.gray};
    width: 50%;
    text-align: center;
  }
`

export const TestimonialsContainer = styled.div`
  margin-top: 80px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5%;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  border-radius: 4px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  > p {
    line-height: 32px;
    color: ${colors.black};
    font-size: 24px;
    width: 100%;
    margin-bottom: 24px;
  }
`

export const Profile = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ProfileContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;

  img {
    max-width: 70px;
    border-radius: 50%;
  }

  p {
    margin-top: 8px;
    width: 100%;
    color: ${colors.black};
    text-align: start;
  }
`
