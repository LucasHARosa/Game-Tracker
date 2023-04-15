import styled from 'styled-components'

export const ContainerFooter = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 61px 130px;

  background-color: ${(props) => props.theme.blue};
  bottom: 0;

  div:first-child {
    display: flex;
    justify-content: center;
    height: 32.14px;
    margin-bottom: 12.86px;
  }
  img {
    width: 31.66px;
    height: 32.14px;

    align-content: center;
  }
  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: 0.875rem;

    color: ${(props) => props.theme.gray};
  }
  div:last-child {
    display: flex;
    flex-direction: row;
    gap: 2.875rem;
    a {
      text-decoration: none;

      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-size: 0.875rem;
    }
  }
  @media (max-width: 768px) {
    align-items: center;
    gap: 0.75rem;
    padding: 22px 8px 15px 8px;
    div:first-child {
      height: 25px;
      margin-bottom: 2px;
    }
    img {
      width: 24.63px;
      height: 25px;
    }
    p {
      font-size: 0.625rem;
      text-align: center;
    }
    div:last-child {
      flex-direction: column;
      gap: 0.5rem;
      align-items: center;
      a {
        font-size: 0.75rem;
      }
    }
  }
`
