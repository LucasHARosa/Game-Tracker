import styled from 'styled-components'

export const ContainerMain = styled.main`
  display: flex;
  flex-direction: column;
  padding: 2.813rem 8.125rem 2.75rem;
`

export const DivCards = styled.div`
  display: flex;
  gap: 1.25rem;
  flex-wrap: wrap;
  justify-content: space-around;

  margin-bottom: 2.5rem;
`

export const Title = styled.h1`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  font-size: 2.25rem;

  margin-bottom: 1.375rem;
`

export const LoadButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    background-color: ${(props) => props.theme.blue};
    border: 0;
    border-radius: 0.5rem;
    padding: 1rem;
    width: 23.75rem;
    cursor: pointer;

    font-family: 'Roboto';
    font-style: normal;
    font-size: 1.125rem;
    font-weight: 100;
    color: ${(props) => props.theme.gray};
    &:hover {
      color: ${(props) => props.theme.white};
      box-shadow: 0 0 2px ${(props) => props.theme['blue-light']};
    }
    &:disabled {
      cursor: default;
      box-shadow: none;
      color: ${(props) => props.theme.gray};
    }
  }
`
