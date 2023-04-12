import styled from 'styled-components'

export const ContainerFooter = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 3.813rem 8.125rem;

  background-color: ${(props) => props.theme['blue']};

  

  div:first-child{
    display: flex;
    justify-content: center;
  }
  img{
    width: 2rem;
    height: 2rem;

    margin-bottom:0.75rem;
    align-content: center;
  }
  p{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: 0.875rem;
  }
  div:last-child{
    display: flex;
    flex-direction: row;
    gap: 2.875rem;
    a{
      text-decoration: none;

      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-size: 0.875rem;
    }
  }
`