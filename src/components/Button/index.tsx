import { Btn } from './styles'

type Props = {
  text: string
  color: 'black' | 'orange'
  padding?: string
  type?: 'button' | 'submit'
}

const Button = ({ text, color, padding, type }: Props) => (
  <Btn padding={padding} color={color} type={type}>
    {text}
  </Btn>
)

export default Button
