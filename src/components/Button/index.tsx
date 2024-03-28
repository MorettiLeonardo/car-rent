import { Btn } from './styles'

type Props = {
  text: string
  color: 'black' | 'orange'
  padding?: string
  type?: 'button' | 'submit'
  onSubmit?: (event: React.MouseEvent<HTMLButtonElement>) => void
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = ({ text, color, padding, type, onSubmit, onClick }: Props) => (
  <Btn
    padding={padding}
    color={color}
    type={type}
    onSubmit={onSubmit}
    onClick={onClick}
  >
    {text}
  </Btn>
)

export default Button
