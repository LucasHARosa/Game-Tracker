import { ContainerMain, DivCards, Title, LoadButton } from './styles'

import { useContext, useState } from 'react'

import { CardGame } from './CardGame'
import { CardContext } from '../../contexts/CardContext'
import { FilterAndOrdenation } from './FilterAndOrdenation'

export function Main() {
  // Puxa os dados do contexto
  const { cards } = useContext(CardContext)

  // Limita o numero de cards renderizados
  const [limitRender, setLimitRender] = useState(9)

  // Carrega mais cards
  function loadMore() {
    setLimitRender(limitRender + 3)
  }

  return (
    <ContainerMain>
      <Title>Ofertas</Title>
      <FilterAndOrdenation />
      <DivCards>
        {cards.slice(0, limitRender).map((card, index) => {
          return (
            <CardGame
              key={index}
              title={card.title}
              normalPrice={card.normalPrice}
              salePrice={card.salePrice}
              savings={card.savings}
              thumb={card.thumb}
            />
          )
        })}
      </DivCards>
      <LoadButton>
        {limitRender >= cards.length && (
          <button disabled>Espere novos jogos</button>
        )}
        {limitRender < cards.length && (
          <button onClick={loadMore}>Carregar Mais</button>
        )}
      </LoadButton>
    </ContainerMain>
  )
}
