import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme['green']};
  }
  body {
    background: linear-gradient(90deg, #0B1641 0%, #C70160 100%);
    color: ${(props) => props.theme['white']};
    -webkit-font-smoothing: antialiased;
  }
  body, textarea, button, p, a {
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
    font-size: 1rem;
    color: ${(props) => props.theme['white']};
  }
  
`
export const ContainerApplicaton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`