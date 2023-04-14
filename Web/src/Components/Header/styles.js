import styled from 'styled-components'

export const ContainerHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  padding: 0.5rem 8.125rem;
  gap: 0.75rem;

  background-color: ${(props) => props.theme.blue};
  img {
    width: 2rem;
    height: 2rem;
  }
  div {
    display: flex;
    flex-direction: row;
    p:nth-child(1) {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 300;
      font-size: 1.5rem;
    }
    p:nth-child(2) {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-size: 1.5rem;
    }
  }
  @media (max-width: 1042px) {
    justify-content: center;
  }
`
