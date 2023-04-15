import styled from 'styled-components'

export const ContainerSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Title = styled.h1`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  font-size: 2.25rem;

  margin-bottom: 1.375rem;

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
    margin-bottom: 0.5rem;
  }
  @media (max-width: 768px) {
    font-size: 1.125rem;
    margin-bottom: 3px;
  }
`
export const ContainerSearch = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 37px;

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
    align-items: flex-end;
  }
  @media (min-width: 644px) and (max-width: 768px) {
    align-items: flex-end;

    width: 628px;
    margin-bottom: 23px;
  }
  @media (max-width: 643px) {
    gap: 0.5rem;
    align-items: flex-end;

    width: 304px;
    margin-bottom: 23px;
  }
`
export const Search = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  padding: 13px 16px;
  border-radius: 0.5rem;

  background-color: ${(props) => props.theme.blue};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  img {
    width: 1.5rem;
    height: 1.5rem;
  }
  @media (min-width: 1040px) {
    min-width: 23.75rem;
  }
  @media (max-width: 768px) {
    gap: 0.875rem;

    padding: 10px 0 8px 11px;
    img {
      width: 1.125rem;
      height: 1.125rem;
    }
  }
`
export const InputSearch = styled.input`
  background-color: transparent;
  border: 0;
  flex-grow: 1;
  color: #fff;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 100;
  font-size: 1.125rem;
  &::placeholder {
    color: ${(props) => props.theme.gray};
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 100;
    font-size: 1.125rem;
  }

  @media (max-width: 1040px) {
    width: 120px;
  }
  @media (max-width: 768px) {
    width: 8rem;
    font-size: 0.875rem;
    &::placeholder {
      font-size: 0.875rem;
    }
  }
`

export const Ordination = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.25rem;
  align-items: center;

  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 1.125rem;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${(props) => props.theme.blue};
    padding: 13px 10px 13px 17px;
    border-radius: 0.5rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 1040px) {
    flex-direction: column;
    gap: 0.75rem;
  }
  @media (max-width: 768px) {
    gap: 0.25rem;

    p {
      font-size: 0.625rem;
    }
    div {
      padding: 10px 6px 10px 8px;
      height: 2.25rem;
    }
  }
`

export const OrdinationSelect = styled.select`
  background-color: ${(props) => props.theme.blue};

  border: 0;

  color: ${(props) => props.theme.gray};
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 100;
  font-size: 1.125rem;

  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 0.875rem;
    height: 1rem;
  }
`
