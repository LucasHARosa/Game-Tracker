import styled from 'styled-components'

export const ContainerMain = styled.main`
  display: flex;
  flex-direction: column;
  padding: 45px 130px 44px;
  align-items: center;

  @media (max-width: 768px) {
    padding: 1rem 0.5rem 2rem 0.5rem;
    align-items: center;
  }
`

export const ContainerCards = styled.div`
  display: flex;
  gap: 1.25rem;
  flex-wrap: wrap;
  justify-content: flex-start;

  margin-bottom: 2.5rem;

  @media (min-width: 1840px) {
    width: 1580px;
  }
  @media (min-width: 1440px) and (max-width: 1839px) {
    width: 1182px;
  }
  @media (min-width: 1040px) and (max-width: 1439px) {
    width: 780px;
  }
  @media (min-width: 769px) and (max-width: 1039px) {
    width: 380px;
  }
  @media (min-width: 644px) and (max-width: 768px) {
    width: 628px;
    margin-bottom: 1.875rem;
  }
  @media (max-width: 643px) {
    width: 304px;
    margin-bottom: 1.875rem;
  }
`

export const ContainerLoadButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    background-color: ${(props) => props.theme.blue};
    border: 0;
    border-radius: 0.5rem;
    padding: 15px 0 14px 0;
    width: 23.75rem;
    height: 3.125rem;
    cursor: pointer;

    font-family: 'Roboto';
    font-style: normal;
    font-size: 1.125rem;
    font-weight: 100;
    color: ${(props) => props.theme.gray};

    &:not(:disabled):hover {
      color: ${(props) => props.theme.white};
      box-shadow: 0 0 2px ${(props) => props.theme['blue-light']};
    }
    &:disabled {
      cursor: default;
      box-shadow: none;
      color: ${(props) => props.theme.gray};
    }
  }
  @media (max-width: 768px) {
    button {
      width: 19rem;
      padding: 15px 0 14px 0;
    }
  }
`
