import { ContainerMain, DivCards, Pesquisa, Title, ContainerPesquisa, InputPesquisa, OrdinationSelect, Ordination } from "./styles";
import {MagnifyingGlass} from 'phosphor-react'

import { useContext } from "react";

import { CardGame } from "./CardGame";
import { CardContext } from "../../contexts/CardContext";


export function Main() {
  const {cardExternal} = useContext(CardContext)
  return (
    <ContainerMain>
      <Title>Ofertas</Title>
      <ContainerPesquisa>
        <Pesquisa>
          <MagnifyingGlass size={24} weight="light" />
          <InputPesquisa type="text" placeholder="Procurar" />
        </Pesquisa>
        
        <Ordination>
          <p>Ordernar por:</p>
          <form action="">
            <OrdinationSelect name="ordination" id="">
              <option value="desconto">% de Desconto</option>
              <option value="menor">Menor Preço</option>
              <option value="maior">Maior Preço</option>
              <option value="alfabetica">Título</option>
            </OrdinationSelect>
          </form>
        </Ordination>
      </ContainerPesquisa>
      <DivCards>
        {cardExternal.map((card) => {
          return (
            <CardGame
              key={card.dealID}
              title={card.title}
              normalPrice={card.normalPrice}
              salePrice={card.salePrice}
              savings={card.savings}
              thumb={card.thumb}
            />
          );
        })}
      </DivCards>
      <button>Carregar Mais</button>
    </ContainerMain>
  );
}