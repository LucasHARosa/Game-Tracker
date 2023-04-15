import { ContainerMain, ContainerCards, ContainerLoadButton } from './styles'

import { useContext, useState } from 'react'

import { CardGame } from './CardGame'
import { CardContext } from '../../contexts/CardContext'
import { FilterAndOrdenation } from './FilterAndOrdenation'

export function Main() {
  const { cards } = useContext(CardContext)

  const [limitRenderCards, setLimitRenderCards] = useState(9)

  function loadMoreCards() {
    setLimitRenderCards(limitRenderCards + 3)
  }

  return (
    <ContainerMain>
      <FilterAndOrdenation />

      <ContainerCards>
        {cards.slice(0, limitRenderCards).map((card, index) => {
          return (
            <CardGame
              key={index}
              title={card.title}
              normalPrice={card.normalPrice}
              salePrice={card.salePrice}
              thumb={card.thumb}
            />
          )
        })}
      </ContainerCards>
      <ContainerLoadButton>
        {limitRenderCards >= cards.length && (
          <button disabled>Espere novos jogos</button>
        )}
        {limitRenderCards < cards.length && (
          <button onClick={loadMoreCards}>Carregar Mais</button>
        )}
      </ContainerLoadButton>
    </ContainerMain>
  )
}
