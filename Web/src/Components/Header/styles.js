import styled from 'styled-components'

export const ContainerHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  padding: 9px 0 8.86px 130px;
  gap: 11.34px;

  background-color: ${(props) => props.theme.blue};
  height: 50px;
  img {
    width: 31.66px;
    height: 32.14px;
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
  @media (max-width: 768px) {
    justify-content: center;
    padding: 9px 0 8.86px 0;
  }
`
