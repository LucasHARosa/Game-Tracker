import {
  Pesquisa,
  ContainerPesquisa,
  InputPesquisa,
  OrdinationSelect,
  Ordination,
} from './styles'

import { MagnifyingGlass } from 'phosphor-react'

import { useForm } from 'react-hook-form'
import { useContext, useEffect } from 'react'

import { CardContext } from '../../../contexts/CardContext'

export function FilterAndOrdenation() {
  const {
    OrderAlfabetic,
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

  const getValues = watch('procurar')

  useEffect(() => {
    if (getValues !== undefined && getValues !== null) {
      FilterTitle(getValues)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getValues])

  return (
    <ContainerPesquisa>
      <Pesquisa>
        <MagnifyingGlass size={24} weight="light" />
        <InputPesquisa
          type="text"
          placeholder="Procurar"
          {...register('procurar')}
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
  )
}
