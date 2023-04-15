import {
  Search,
  ContainerSearch,
  InputSearch,
  OrdinationSelect,
  Ordination,
  ContainerSection,
  Title,
} from './styles'

import { useForm } from 'react-hook-form'
import { useContext, useEffect } from 'react'

import { CardContext } from '../../../contexts/CardContext'

export function FilterAndOrdenation() {
  const {
    OrderAlphabet,
    OrderPrice,
    OrderPriceDesc,
    OrderDiscount,
    FilterTitle,
  } = useContext(CardContext)

  const { register, watch } = useForm()

  // Muda o valor do tipo de ordenação
  function handleChange(event) {
    const selectOption = event.target.value
    switch (selectOption) {
      case 'discount':
        OrderDiscount()
        break
      case 'lowestPrice':
        OrderPrice()
        break
      case 'biggestPrice':
        OrderPriceDesc()
        break
      case 'alphabet':
        OrderAlphabet()
        break
      default:
        break
    }
  }

  const getValues = watch('procurar')

  useEffect(() => {
    if (getValues !== undefined && getValues !== null) {
      FilterTitle(getValues)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getValues])

  return (
    <ContainerSection>
      <Title>Ofertas</Title>
      <ContainerSearch>
        <Search>
          <img src="/search.svg" alt="" />
          <InputSearch
            type="text"
            placeholder="Procurar"
            {...register('procurar')}
          />
        </Search>

        <Ordination>
          <p>Ordernar por:</p>
          <div>
            <OrdinationSelect name="ordination" onChange={handleChange}>
              <option value="discount">% de Desconto</option>
              <option value="lowestPrice">Menor Preço</option>
              <option value="biggestPrice">Maior Preço</option>
              <option value="alphabet">Título</option>
            </OrdinationSelect>
          </div>
        </Ordination>
      </ContainerSearch>
    </ContainerSection>
  )
}
