import { Btn } from './styles'

type Props = {
  text: string
  color: 'black' | 'orange'
  padding?: string
}

const Button = ({ text, color, padding }: Props) => (
  <Btn padding={padding} color={color}>
    {text}
  </Btn>
)

export default Button
