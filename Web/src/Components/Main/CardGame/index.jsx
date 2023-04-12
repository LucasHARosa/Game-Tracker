import { ContainerCard, ContainerInfo, Title, ContainerButtons, ButtonCompra, ButtonDetails, PriceDiv } from "./styles";

export function CardGame (props){

  let descont = ''

  function handlePrice(){
    if(props.salePrice === null){
      descont = props.normalPrice.toString()
      return (
        <p>${props.normalPrice}</p>
      )
    }else if (props.salePrice === 0){
      descont = 'GRÁTIS'
      return (
        <>
          <p>${props.salePrice}</p>
          <p>${props.normalPrice}</p>
        </>
      )
    }else{
      const percent = (props.normalPrice - props.salePrice) / props.normalPrice * 100
      descont = ("-" + percent.toFixed(0).toString() + "%")
      return (
        <>
          <p>${props.salePrice}</p>
          <p>${props.normalPrice}</p>
        </>
      )
    }
  }

  return (
    <ContainerCard>
      <img src={props.thumb} alt="" />
      <ContainerInfo>
        <Title>{props.title}</Title>
        <ContainerButtons>
          <ButtonDetails>DETALHES</ButtonDetails>
          <div>
            <PriceDiv>
              {handlePrice()}
            </PriceDiv>
            <ButtonCompra>{descont}</ButtonCompra>
          </div>
        </ContainerButtons>
      </ContainerInfo>
    </ContainerCard>
  )
}