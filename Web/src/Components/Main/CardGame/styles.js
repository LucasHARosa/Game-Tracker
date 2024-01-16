import styled from 'styled-components'

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.blue};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 23.75rem;
  img {
    width: 100%;
    height: 147px;
    border-radius: 0.5rem 0.5rem 0 0;
  }

  @media (max-width: 768px) {
    border-radius: 6.37px;
    width: 19rem;
    img {
      height: 95px;
      border-radius: 6.37px 6.37px 0 0;
    }
  }
`
export const ContainerInfo = styled.div`
  padding: 7px 16px 16px;
  @media (max-width: 768px) {
    padding: 9px 10px 11px 11px;
  }
`

export const Title = styled.h3`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  font-size: 1.5rem;

  margin-bottom: 0.875rem;
  height: 28px;
  text-overflow: ellipsis;
  overflow: hidden;

  @media (max-width: 768px) {
    font-size: 1.125rem;
    margin-bottom: 15px;
    height: 19px;
  }
`

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  div:nth-child(2) {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.625rem;
  }
`

const BaseButton = styled.button`
  display: flex;
  align-content: center;
  justify-content: center;

  border: 0;
  border-radius: 0.5rem;
  padding: 9px 16px 9px 12px;
  height: 2.438rem;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 1.125rem;

  cursor: pointer;

  transition: background-color 0.1s;

  @media (max-width: 768px) {
    align-items: center;

    border-radius: 0.384rem;
    padding: 7px 12px 7px 11px;
    height: 1.875rem;

    font-size: 0.875rem;
  }
`

export const DetailsButton = styled(BaseButton)`
  background-color: ${(props) => props.theme.pink};
  width: 7.25rem;

  &:hover {
    background-color: ${(props) => props.theme['pink-hover']};
  }
  @media (max-width: 768px) {
    width: 5.75rem;
    border-radius: 6.15px;
  }
`

export const PurchaseButton = styled(BaseButton)`
  background-color: ${(props) => props.theme.green};
  width: 5.25rem;
  &:hover {
    background-color: ${(props) => props.theme['green-hover']};
  }
  @media (max-width: 768px) {
    padding: 8px 7px 7px 8px;
    width: 4rem;
    height: 31px;
    border-radius: 6.37px;
  }
`

export const PriceDiv = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;

  p {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
  }
  p:last-child {
    font-weight: 100;
    font-size: 0.75rem;
    text-decoration: line-through;
    color: ${(props) => props.theme.gray};
  }
  p:first-child {
    font-weight: 700;
    font-size: 1.125rem;
  }

  @media (max-width: 768px) {
    p:last-child {
      font-size: 0.625rem;
    }
    p:first-child {
      font-size: 0.875rem;
    }
  }
`

export const ContainerDetails = styled.div`
  z-index: 1;
  position: absolute;
  width: 23.75rem;
  height: 147px;
  border-radius: 0.5rem 0.5rem 0 0;
  padding: 1rem;

  background-color: ${(props) => props.theme.blue};
  opacity: 0.8;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;

  p:first-child {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 1.125rem;
  }
  p:last-child {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 100;
    font-size: 1rem;
    color: ${(props) => props.theme.gray};
  }
  @media (max-width: 768px) {
    width: 19rem;
    height: 95px;
    border-radius: 0.398rem 0.398rem 0 0;

    padding: 0.5rem;
    gap: 0.25rem;
    p:first-child {
      font-size: 0.75rem;
    }
    p:last-child {
      font-size: 0.625rem;
    }
  }
`
