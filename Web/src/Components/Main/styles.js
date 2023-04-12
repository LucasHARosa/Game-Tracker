import styled from 'styled-components'

export const ContainerMain = styled.main`
  display: flex;
  flex-direction: column;
  padding: 5.938rem 8.125rem 2.75rem;
`

export const ContainerPesquisa = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 2.313rem;
`
export const Pesquisa = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  padding: 0.813rem 1rem;
  border-radius: 0.5rem;
  min-width: 22rem ;

  background-color: ${(props) => props.theme['blue']};

  
`
export const InputPesquisa = styled.input`
  background-color: transparent;
  border: 0;
  flex-grow: 1;
  &::placeholder {
    color: ${(props) => props.theme['white']};
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 100;
    font-size: 1.125rem;
  }
`

export const Ordination = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.25rem;
  align-items: center;
  p{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 1.125rem;
  }
  form{
    background-color: ${(props) => props.theme['blue']};
    padding: 0.813rem 0.625rem 0.813rem 1rem;
    border-radius: 0.5rem;
  }

`

export const OrdinationSelect = styled.select`
  background-color: ${(props) => props.theme['blue']};

  border: 0;

  color: ${(props) => props.theme['white']};
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 100;
  font-size: 1.125rem;
`

export const DivCards = styled.div`
`


export const Title = styled.h1`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  font-size: 2.25rem;

  margin-bottom: 1.375rem;
`