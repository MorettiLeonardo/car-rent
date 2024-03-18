import { BannerContainer } from './styles'

type Props = {
  title: string
  text: string
  isOrange?: boolean
}

const Banner = ({ text, title, isOrange }: Props) => (
  <BannerContainer>
    <div className="container">
      <h2>{title}</h2>
      <h3 className={isOrange ? 'isOrange' : ''}>{text}</h3>
    </div>
  </BannerContainer>
)

export default Banner
