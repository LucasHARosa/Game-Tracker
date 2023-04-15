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
    height: 2rem;
  }
  img {
    width: 2rem;
    height: 2rem;

    margin-bottom: 0.75rem;
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
      height: 1.375rem;
      margin-bottom: 0.125rem;
    }
    img {
      width: 1.375rem;
      height: 1.375rem;
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
