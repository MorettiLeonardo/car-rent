import { Btn } from './styles'

type Props = {
  text: string
}

const Button = ({ text }: Props) => <Btn>{text}</Btn>

export default Button
