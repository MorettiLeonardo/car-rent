import { useState } from 'react'
import { Container, QuestionsContainer } from './styles'
import { arrow } from '../../assets/svg/arrow'

const Faq = () => {
  const [question1, setQuestion1] = useState(false)
  const [question2, setQuestion2] = useState(false)
  const [question3, setQuestion3] = useState(false)

  return (
    <section>
      <Container className="container">
        <h4>FAQ</h4>
        <h2>Perguntas frequentes</h2>
        <p>
          Perguntas frequentes sobre o processo de reserva de aluguel de carro
          em nosso site: respostas a dúvidas e preocupações comuns.
        </p>
        <QuestionsContainer>
          <ul>
            <li onClick={() => setQuestion1(!question1)}>
              <h4 className={question1 ? 'is-selected' : ''}>
                1. O que há de especial em comparar ofertas de aluguel de
                automóveis?
                <span>{arrow}</span>
              </h4>
              <p className={question1 ? '' : 'is-close'}>
                Comparar ofertas de aluguel de carros é importante porque ajuda
                a encontrar a melhor oferta que se adapta ao seu orçamento e
                necessidades, garantindo que você obtenha o máximo valor pelo
                seu dinheiro. Ao comparar várias opções, você pode encontrar
                ofertas que oferecem preços mais baixos, serviços adicionais ou
                modelos de carros melhores. Você pode encontrar ofertas de
                aluguel de automóveis pesquisando on-line e comparando preços de
                diferentes locadoras.
              </p>
            </li>
            <li onClick={() => setQuestion2(!question2)}>
              <h4 className={question2 ? 'is-selected' : ''}>
                2. Como encontro ofertas de aluguel de automóveis?
                <span>{arrow}</span>
              </h4>

              <p className={question2 ? '' : 'is-close'}>
                Você pode encontrar ofertas de aluguel de automóveis pesquisando
                on-line e comparando preços de diferentes locadoras. Sites como
                Expedia, Kayak e Travelocity permitem comparar preços e ver as
                opções de aluguel disponíveis. Também é recomendável se
                inscrever em boletins informativos por e-mail e acompanhar as
                locadoras de veículos nas redes sociais para ser informado sobre
                quaisquer ofertas ou promoções especiais.
              </p>
            </li>
            <li onClick={() => setQuestion3(!question3)}>
              <h4 className={question3 ? 'is-selected' : ''}>
                3. Como encontro preços tão baixos para aluguel de automóveis?
                <span>{arrow}</span>
              </h4>

              <p className={question3 ? '' : 'is-close'}>
                Reserve com antecedência: reservar seu carro alugado com
                antecedência muitas vezes pode resultar em preços mais baixos.
                Compare preços de várias empresas: use sites como Kayak, Expedia
                ou Travelocity para comparar preços de várias locadoras de
                veículos. Procure códigos de desconto e cupons: Pesquise códigos
                de desconto e cupons que você pode usar para reduzir o preço do
                aluguel. Alugar fora do aeroporto às vezes pode resultar em
                preços mais baixos.
              </p>
            </li>
          </ul>
        </QuestionsContainer>
      </Container>
    </section>
  )
}

export default Faq
