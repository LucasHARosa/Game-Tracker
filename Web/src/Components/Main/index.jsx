import {
  ContainerMain,
  DivCards,
  Pesquisa,
  Title,
  ContainerPesquisa,
  InputPesquisa,
  OrdinationSelect,
  Ordination,
  LoadButton,
} from './styles'

import { MagnifyingGlass } from 'phosphor-react'

import { useContext, useState } from 'react'

import { CardGame } from './CardGame'
import { CardContext } from '../../contexts/CardContext'

export function Main() {
  // Pega os dados do contexto
  const {
    cards,
    cardExternal,
    OrderAlfabetic,
    OrderPrice,
    OrderPriceDesc,
    OrderDiscount,
    // FilterTitle,
    setCards,
  } = useContext(CardContext)

  // Limita o numero de cards renderizados
  const [limitRender, setLimitRender] = useState(9)

  // Estado de pesquisa
  const [search, setSearch] = useState('')

  // Muda o valor do tipo de ordenação
  function handleChange(event) {
    const selectOption = event.target.value
    switch (selectOption) {
      case 'desconto':
        OrderDiscount()
        break
      case 'menor':
        OrderPrice()
        break
      case 'maior':
        OrderPriceDesc()
        break
      case 'alfabetica':
        OrderAlfabetic()
        break
      default:
        break
    }
  }

  // Muda o valor do estado de pesquisa
  function handleSearch() {
    event.target.setCustomValidity('')
    setSearch(event.target.value)
    const newCard = [...cardExternal].filter((card) => {
      return card.title.toLowerCase().includes(search.toLowerCase())
    })
    setCards(newCard)
  }

  // Filtra em tempo real os titulos que contem a string de pesquisa
  // useEffect(() => {
  //   FilterTitle(search)
  // }, [FilterTitle, search])

  function loadMore() {
    setLimitRender(limitRender + 3)
  }
  return (
    <ContainerMain>
      <Title>Ofertas</Title>
      <ContainerPesquisa>
        <Pesquisa>
          <MagnifyingGlass size={24} weight="light" />
          <InputPesquisa
            type="text"
            placeholder="Procurar"
            onChange={handleSearch}
            value={search}
          />
        </Pesquisa>

        <Ordination>
          <p>Ordernar por:</p>
          <div>
            <OrdinationSelect name="ordination" onChange={handleChange}>
              <option value="desconto">% de Desconto</option>
              <option value="menor">Menor Preço</option>
              <option value="maior">Maior Preço</option>
              <option value="alfabetica">Título</option>
            </OrdinationSelect>
          </div>
        </Ordination>
      </ContainerPesquisa>
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
