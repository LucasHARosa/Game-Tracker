import styled from 'styled-components'

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.blue};
  width: 23.75rem;
  img {
    width: 100%;
    height: 8.91rem;
    border-radius: 0.5rem 0.5rem 0 0;
  }
`
export const ContainerInfo = styled.div`
  padding: 0.5rem 1rem 1rem;
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

export const Title = styled.h3`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  font-size: 1.5rem;

  margin-bottom: 0.875rem;
`

const BaseButton = styled.button`
  display: flex;
  align-content: center;

  border: 0;
  border-radius: 0.5rem;
  padding: 0.5rem 0.875rem;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 1.125rem;

  cursor: pointer;

  transition: background-color 0.1s;
  &:focus {
    box-shadow: none;
  }
`

export const ButtonDetails = styled(BaseButton)`
  background-color: ${(props) => props.theme.pink};
  &:hover {
    background-color: ${(props) => props.theme['pink-hover']};
  }
`

export const ButtonCompra = styled(BaseButton)`
  background-color: ${(props) => props.theme.green};
  &:hover {
    background-color: ${(props) => props.theme['green-hover']};
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
`

export const ContainerDetails = styled.div`
  z-index: 1;
  position: absolute;
  width: 23.75rem;
  height: 8.91rem;
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
`
