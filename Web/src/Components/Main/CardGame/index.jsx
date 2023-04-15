import {
  ContainerCard,
  ContainerInfo,
  Title,
  ContainerButtons,
  PurchaseButton,
  DetailsButton,
  PriceDiv,
  ContainerDetails,
} from './styles'

import { useState } from 'react'

export function CardGame(props) {
  const [showDetails, setShowDetails] = useState(false)
  let descont = ''

  // Check if the game is on sale
  function handlePrice() {
    if (props.salePrice === null) {
      descont = props.normalPrice.toString()
      return <p>$ {props.normalPrice}</p>
    } else if (props.salePrice === 0) {
      descont = 'GRÁTIS'
      return (
        <>
          <p>$ {props.salePrice}</p>
          <p>$ {props.normalPrice}</p>
        </>
      )
    } else {
      const percent =
        ((props.normalPrice - props.salePrice) / props.normalPrice) * 100
      descont = '-' + percent.toFixed(0).toString() + '%'
      return (
        <>
          <p>$ {props.salePrice}</p>
          <p>$ {props.normalPrice}</p>
        </>
      )
    }
  }

  // Check if the game has an image
  function handleImg() {
    if (props.thumb === null) {
      return <img src="/sem-imagem.png" alt="" />
    } else {
      return <img src={props.thumb} alt="" />
    }
  }

  return (
    <ContainerCard>
      {handleImg()}
      <ContainerInfo>
        <Title>{props.title}</Title>
        <ContainerButtons>
          <DetailsButton onClick={() => setShowDetails(!showDetails)}>
            DETALHES
          </DetailsButton>
          <div>
            <PriceDiv>{handlePrice()}</PriceDiv>
            <PurchaseButton>{descont}</PurchaseButton>
          </div>
        </ContainerButtons>
      </ContainerInfo>
      {showDetails && (
        <ContainerDetails>
          <p>Detalhes do Game:</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque porro
            enim facilis distinctio animi, explicabo quibusdam aliquid amet
            dignissimos non quos repellendus magni sint quod odio, quam
            recusandae, modi deleniti.
          </p>
        </ContainerDetails>
      )}
    </ContainerCard>
  )
}
